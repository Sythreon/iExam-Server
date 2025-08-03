import { PaginatedRequest } from '../models/pagination.models';
export declare class CreateQuestionRequest {
    content: string;
    correctAnswer: string;
    choices: string[];
}
export declare class GetQuestionsRequest extends PaginatedRequest {
    content?: string;
}
export declare class UpdateQuestionRequest {
    questionId: string;
    content?: string;
    correctAnswer?: string;
    choices?: string[];
}
