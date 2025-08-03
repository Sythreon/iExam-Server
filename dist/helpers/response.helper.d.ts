import { Response } from 'express';
import { PaginationData } from '../constants/models/pagination.models';
export declare class IExamResponse<K> {
    success: boolean;
    code: number;
    pagination?: PaginationData | null;
    data: K;
    status: string;
    message: string;
    static Send(response: IExamResponse<any>, res: Response): any;
    static OnClose(res: Response, callback: () => void): void;
    static Custom<T>(data: {
        success?: boolean;
        code?: number;
        data?: T;
        status?: string;
        message?: string;
    }): IExamResponse<T>;
    static Success<T>(data: {
        data?: T;
        status?: string;
        message?: string;
    }): IExamResponse<T>;
    static Failure(data: {
        data?: any;
        error?: any;
    }): IExamResponse<any>;
    static Error<T>(data: {
        data?: T;
        error?: any;
    }): IExamResponse<T>;
    static Create<T>(data: {
        data?: T;
        message?: string;
    }): IExamResponse<T>;
    static Update<T>(data: {
        data?: T;
        message?: string;
    }): IExamResponse<T>;
    static Fetch<T>(data: {
        data?: T[];
        message?: string;
        pagination?: Partial<PaginationData>;
    }): IExamResponse<T[]>;
    static Delete<T>(data: {
        data?: T;
        message?: string;
    }): IExamResponse<T>;
    static Unauthorised(message: string): IExamResponse<any>;
}
