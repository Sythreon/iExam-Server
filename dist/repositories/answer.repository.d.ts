import { Answer } from 'src/constants/entities/answer.entity';
import { CreateAnswerRequest, GetAnswersRequest, UpdateAnswerRequest } from '../constants/requests/answer.requests';
import { IExamResponse } from '../helpers/response.helper';
export declare class AnswerRepository {
    constructor();
    static CreateAnswer(data: CreateAnswerRequest): Promise<IExamResponse<Answer>>;
    static UpdateAnswer(data: UpdateAnswerRequest): Promise<IExamResponse<Answer>>;
    static DeleteAnswer(answerId: string): Promise<IExamResponse<null>>;
    static GetAnswers(filters: GetAnswersRequest): Promise<IExamResponse<Answer[]>>;
    static FindAnswer(answerId: string): Promise<IExamResponse<Answer>>;
}
