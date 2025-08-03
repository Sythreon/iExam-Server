"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamRepository = void 0;
const common_1 = require("@nestjs/common");
const session_database_1 = require("../data/database/session.database");
const response_helper_1 = require("../helpers/response.helper");
const session_repository_1 = require("./session.repository");
const question_repository_1 = require("./question.repository");
const exam_helper_1 = require("../helpers/exam.helper");
const answer_repository_1 = require("./answer.repository");
const question_database_1 = require("../data/database/question.database");
const exam_enums_1 = require("../constants/enums/exam.enums");
const session_enums_1 = require("../constants/enums/session.enums");
const answer_database_1 = require("../data/database/answer.database");
let ExamRepository = class ExamRepository {
    constructor() {
    }
    static async Start() {
        const newSession = await session_repository_1.SessionRepository.CreateSession({
            numberOfQuestions: 10,
            durationInMinutes: 10
        });
        const questions = await question_repository_1.QuestionRepository.GetQuestions({ page: 1, pageSize: 10 });
        const { question, choices } = exam_helper_1.ExamHelper.getQuestion(newSession.data, questions.data);
        const response = {
            sessionId: newSession.data.sessionId,
            questionId: question.questionId,
            questionNumber: newSession.data.progress,
            question: question.content,
            choices
        };
        return response_helper_1.IExamResponse.Create({ data: response, message: "Exam started successfully." });
    }
    static async Answer(data) {
        const session = await session_database_1.SessionDataAgent.Find({ sessionId: data.sessionId });
        if (!session)
            return response_helper_1.IExamResponse.Failure({ error: "Session not found." });
        if (session.endTime < Date.now()) {
            const result = await this.Complete(session);
            return response_helper_1.IExamResponse.Failure({ data: result.data, error: "Time limit exceeded. Exam has ended." });
        }
        const currentQuestion = await question_database_1.QuestionDataAgent.Find({ questionId: data.questionId });
        if (!currentQuestion)
            return response_helper_1.IExamResponse.Failure({ error: "Question not found." });
        const existingAnswer = await answer_database_1.AnswerDataAgent.Find({ sessionId: session.sessionId, questionId: data.questionId });
        if (existingAnswer)
            await answer_repository_1.AnswerRepository.UpdateAnswer({ ...existingAnswer, ...data });
        else {
            session.progress += 1;
            await answer_repository_1.AnswerRepository.CreateAnswer(data);
        }
        session.status = session_enums_1.SessionStatusEnum.ONGOING;
        await session_repository_1.SessionRepository.UpdateSession(session);
        if (session.progress === session.numberOfQuestions)
            return this.Complete(session);
        else
            return this.Continue(session);
    }
    static async Continue(session) {
        const questions = await question_repository_1.QuestionRepository.GetQuestions({ page: 1, pageSize: 10 });
        const { question, choices } = exam_helper_1.ExamHelper.getQuestion(session, questions.data);
        const response = {
            sessionId: session.sessionId,
            questionId: question.questionId,
            questionNumber: session.progress,
            question: question.content,
            choices
        };
        return response_helper_1.IExamResponse.Delete({ data: response, message: "Answer recorded successfully." });
    }
    static async Complete(session) {
        const answers = await answer_repository_1.AnswerRepository.GetAnswers({
            sessionId: session.sessionId,
            page: 1,
            pageSize: 10
        });
        const { finalScore, remark } = exam_helper_1.ExamHelper.gradeAnswers(session, answers.data);
        await session_repository_1.SessionRepository.CompleteSession(session.sessionId, finalScore, session.status);
        const response = {
            sessionId: session.sessionId,
            finalScore: `${finalScore}%`,
            result: finalScore >= 50 ? exam_enums_1.ExamResultEnum.PASS : exam_enums_1.ExamResultEnum.FAIL,
            remark
        };
        return response_helper_1.IExamResponse.Delete({ data: response, message: "Exam completed successfully." });
    }
};
exports.ExamRepository = ExamRepository;
exports.ExamRepository = ExamRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ExamRepository);
//# sourceMappingURL=exam.repository.js.map