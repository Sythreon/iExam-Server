import { PaginatedRequest } from '../models/pagination.models';
export declare class CreateExceptionRequest {
    date: string;
    method: string;
    url: string;
    code: number;
    message?: string;
    metadata?: string;
}
export declare class GetExceptionsRequest extends PaginatedRequest {
    sessionId?: string;
    method?: string;
    url?: string;
    code?: string;
}
