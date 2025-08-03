import { PaginatedRequest } from '../models/pagination.models';
export declare class CreateSessionRequest {
    numberOfQuestions: number;
    durationInMinutes: number;
}
export declare class GetSessionsRequest extends PaginatedRequest {
    date?: string;
    status?: string;
}
export declare class UpdateSessionRequest {
    sessionId: string;
    numberOfQuestions?: number;
}
