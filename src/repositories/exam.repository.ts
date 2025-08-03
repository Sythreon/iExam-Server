import { Injectable } from '@nestjs/common';
import { Session } from 'src/constants/entities/session.entity';
import { SessionDataAgent } from 'src/data/database/session.database';
import { IExamResponse } from '../helpers/response.helper';
import { SessionRepository } from './session.repository';
import { QuestionRepository } from './question.repository';
import { ExamCompletedResponse, ExamOngoingResponse } from 'src/constants/responses/exam.responses';
import { ExamHelper } from 'src/helpers/exam.helper';
import { ExamAnswerRequest } from 'src/constants/requests/exam.requests';
import { AnswerRepository } from './answer.repository';
import { QuestionDataAgent } from 'src/data/database/question.database';
import { ExamResultEnum } from 'src/constants/enums/exam.enums';
import { SessionStatusEnum } from 'src/constants/enums/session.enums';
import { AnswerDataAgent } from 'src/data/database/answer.database';

@Injectable()
export class ExamRepository {

    constructor() {
    }

    static async Start(): Promise<IExamResponse<ExamOngoingResponse>> {
        const newSession = await SessionRepository.CreateSession({
            numberOfQuestions: 10,
            durationInMinutes: 10
        });

        const questions = await QuestionRepository.GetQuestions({ page: 1, pageSize: 10 });

        const { question, choices } = ExamHelper.getQuestion(newSession.data, questions.data);

        const response: ExamOngoingResponse = {
            sessionId: newSession.data.sessionId,
            questionId: question.questionId,
            questionNumber: newSession.data.progress,
            question: question.content,
            choices
        }

        return IExamResponse.Create({ data: response, message: "Exam started successfully." });
    }

    static async Answer(data: ExamAnswerRequest): Promise<IExamResponse<ExamOngoingResponse | ExamCompletedResponse>> {
        const session = await SessionDataAgent.Find({ sessionId: data.sessionId });
        if (!session) return IExamResponse.Failure({ error: "Session not found." });

        if (session.endTime < Date.now()) {
            const result = await this.Complete(session);
            return IExamResponse.Failure({ data: result.data, error: "Time limit exceeded. Exam has ended." });
        }

        const currentQuestion = await QuestionDataAgent.Find({ questionId: data.questionId });
        if (!currentQuestion) return IExamResponse.Failure({ error: "Question not found." });

        const existingAnswer = await AnswerDataAgent.Find({ sessionId: session.sessionId, questionId: data.questionId });
        if (existingAnswer) await AnswerRepository.UpdateAnswer({ ...existingAnswer, ...data });
        else {
            session.progress += 1;
            await AnswerRepository.CreateAnswer(data);
        }

        session.status = SessionStatusEnum.ONGOING;

        await SessionRepository.UpdateSession(session);

        if (session.progress === session.numberOfQuestions) return this.Complete(session);
        else return this.Continue(session);
    }

    static async Continue(session: Session): Promise<IExamResponse<ExamOngoingResponse>> {
        const questions = await QuestionRepository.GetQuestions({ page: 1, pageSize: 10 });

        const { question, choices } = ExamHelper.getQuestion(session, questions.data);

        const response: ExamOngoingResponse = {
            sessionId: session.sessionId,
            questionId: question.questionId,
            questionNumber: session.progress,
            question: question.content,
            choices
        }

        return IExamResponse.Delete({ data: response, message: "Answer recorded successfully." });
    }

    static async Complete(session: Session): Promise<IExamResponse<ExamCompletedResponse>> {
        const answers = await AnswerRepository.GetAnswers({
            sessionId: session.sessionId,
            page: 1,
            pageSize: 10
        });

        const { finalScore, remark } = ExamHelper.gradeAnswers(session, answers.data);

        await SessionRepository.CompleteSession(session.sessionId, finalScore, session.status);

        const response: ExamCompletedResponse = {
            sessionId: session.sessionId,
            finalScore: `${finalScore}%`,
            result: finalScore >= 50 ? ExamResultEnum.PASS : ExamResultEnum.FAIL,
            remark
        }

        return IExamResponse.Delete({ data: response, message: "Exam completed successfully." });
    }
}
