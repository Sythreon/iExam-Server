import { PaginatedRequest } from '../models/pagination.models';
export declare class CreateExceptionRequest {
    sessionId: string;
    date: number;
    method: string;
    url: string;
    code: number;
    message?: string;
}
export declare class GetExceptionsRequest extends PaginatedRequest {
    sessionId?: string;
    method?: string;
    url?: string;
    code?: string;
}
