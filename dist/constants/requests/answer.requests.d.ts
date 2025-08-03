import { PaginatedRequest } from '../models/pagination.models';
export declare class CreateAnswerRequest {
    questionId: string;
    sessionId: string;
    selectedChoice: string;
}
export declare class GetAnswersRequest extends PaginatedRequest {
    sessionId?: string;
}
export declare class UpdateAnswerRequest {
    answerId: string;
    selectedChoice?: string;
}
