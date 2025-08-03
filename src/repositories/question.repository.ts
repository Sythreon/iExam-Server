import { Injectable } from '@nestjs/common';
import { Question } from 'src/constants/entities/question.entity';
import { QuestionDataAgent } from 'src/data/database/question.database';
import { CreateQuestionRequest, GetQuestionsRequest, UpdateQuestionRequest } from '../constants/requests/question.requests';
import { IExamResponse } from '../helpers/response.helper';
import { Mapper } from '../utilities/mapper.util';

@Injectable()
export class QuestionRepository {

    constructor() {
    }

    static async CreateQuestion(data: CreateQuestionRequest): Promise<IExamResponse<Question>> {
        const question: Question = Mapper.map(data, Question);

        const newQuestion = await QuestionDataAgent.Create(question);

        return IExamResponse.Create({ data: newQuestion, message: "Question created successfully." });
    }

    static async UpdateQuestion(data: UpdateQuestionRequest): Promise<IExamResponse<Question>> {
        const question = await QuestionDataAgent.Find({ questionId: data.questionId });
        if (!question) return IExamResponse.Failure({ error: "Question not found." });

        const result = await QuestionDataAgent.Update({ questionId: data.questionId }, data);

        return IExamResponse.Update({ data: result, message: "Question updated successfully." });
    }

    static async DeleteQuestion(questionId: string): Promise<IExamResponse<null>> {
        const question = await QuestionDataAgent.Find({ questionId });
        if (!question) return IExamResponse.Failure({ error: "Question not found." });

        await QuestionDataAgent.Delete({ questionId });

        return IExamResponse.Delete({ data: null, message: "Question deleted successfully." });
    }

    static async GetQuestions(filters: GetQuestionsRequest): Promise<IExamResponse<Question[]>> {
        const { page, pageSize, ...query } = filters;

        const queries: any = query;
        
        if (query.content) {
            const regex = new RegExp(query.content, 'i');
            queries.content = { $regex: regex }
        }

        const questions = await QuestionDataAgent.Get(queries, { page, pageSize });

        return IExamResponse.Fetch({
            data: questions.data,
            pagination: questions.pagination,
            message: "Questions fetched successfully."
        });
    }

    static async FindQuestion(questionId: string): Promise<IExamResponse<Question>> {
        const question = await QuestionDataAgent.Find({ questionId });
        if (!question) return IExamResponse.Failure({ error: "Question not found." });

        return IExamResponse.Success({ data: question, message: "Question fetched successfully." });
    }
}
