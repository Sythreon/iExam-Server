import { Question } from 'src/constants/entities/question.entity';
import { CreateQuestionRequest, GetQuestionsRequest, UpdateQuestionRequest } from '../constants/requests/question.requests';
import { IExamResponse } from '../helpers/response.helper';
export declare class QuestionRepository {
    constructor();
    static CreateQuestion(data: CreateQuestionRequest): Promise<IExamResponse<Question>>;
    static UpdateQuestion(data: UpdateQuestionRequest): Promise<IExamResponse<Question>>;
    static DeleteQuestion(questionId: string): Promise<IExamResponse<null>>;
    static GetQuestions(filters: GetQuestionsRequest): Promise<IExamResponse<Question[]>>;
    static FindQuestion(questionId: string): Promise<IExamResponse<Question>>;
}
