import { Injectable } from '@nestjs/common';
import { Answer } from 'src/constants/entities/answer.entity';
import { AnswerDataAgent } from 'src/data/database/answer.database';
import { CreateAnswerRequest, GetAnswersRequest, UpdateAnswerRequest } from '../constants/requests/answer.requests';
import { IExamResponse } from '../helpers/response.helper';
import { Mapper } from '../utilities/mapper.util';

@Injectable()
export class AnswerRepository {

    constructor() {
    }

    static async CreateAnswer(data: CreateAnswerRequest): Promise<IExamResponse<Answer>> {
        const answer: Answer = Mapper.map(data, Answer);

        const newAnswer = await AnswerDataAgent.Create(answer);

        return IExamResponse.Create({ data: newAnswer, message: "Answer created successfully." });
    }

    static async UpdateAnswer(data: UpdateAnswerRequest): Promise<IExamResponse<Answer>> {
        const answer = await AnswerDataAgent.Find({ answerId: data.answerId });
        if (!answer) return IExamResponse.Failure({ error: "Answer not found." });

        const result = await AnswerDataAgent.Update({ answerId: data.answerId }, data);

        return IExamResponse.Update({ data: result, message: "Answer updated successfully." });
    }

    static async DeleteAnswer(answerId: string): Promise<IExamResponse<null>> {
        const answer = await AnswerDataAgent.Find({ answerId });
        if (!answer) return IExamResponse.Failure({ error: "Answer not found." });

        await AnswerDataAgent.Delete({ answerId });

        return IExamResponse.Delete({ data: null, message: "Answer deleted successfully." });
    }

    static async GetAnswers(filters: GetAnswersRequest): Promise<IExamResponse<Answer[]>> {
        const { page, pageSize, ...query } = filters;

        const answers = await AnswerDataAgent.Get(query, { page, pageSize });

        return IExamResponse.Fetch({
            data: answers.data,
            pagination: answers.pagination,
            message: "Answers fetched successfully."
        });
    }

    static async FindAnswer(answerId: string): Promise<IExamResponse<Answer>> {
        const answer = await AnswerDataAgent.Find({ answerId });
        if (!answer) return IExamResponse.Failure({ error: "Answer not found." });

        return IExamResponse.Success({ data: answer, message: "Answer fetched successfully." });
    }
}
