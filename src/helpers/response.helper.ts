import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { PaginationData } from '../constants/models/pagination.models';

@Injectable()
export class IExamResponse<K> {
    success: boolean;
    code: number;
    pagination?: PaginationData | null;
    data: K;
    status: string;
    message: string;

    static Send(response: IExamResponse<any>, @Res() res: Response): any {
        res.status(response.code).send(response);
    }

    static OnClose(@Res() res: Response, callback: () => void) {
        res.once('close', callback)
    }

    static Custom<T>(data: { success?: boolean, code?: number, data?: T; status?: string; message?: string }): IExamResponse<T> {
        return {
            success: data.success ?? true,
            code: data.code ?? HttpStatus.OK,
            data: data.data ?? null,
            status: data.status ?? "SUCCESS",
            message: data.message ?? "Completed successfully."
        }
    }

    static Success<T>(data: { data?: T; status?: string; message?: string }): IExamResponse<T> {
        return {
            success: true,
            code: HttpStatus.OK,
            data: data.data ?? null,
            status: data.status ?? "SUCCESS",
            message: data.message ?? "Completed successfully."
        }
    }

    static Failure(data: { data?: any; error?: any }): IExamResponse<any> {
        return {
            success: false,
            code: HttpStatus.BAD_REQUEST,
            data: data.data ?? null,
            status: "FAILED",
            message: data.error ?? "An error occured during request execution."
        }
    }

    static Error<T>(data: { data?: T; error?: any }): IExamResponse<T> {
        return {
            success: false,
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            data: data.data ?? null,
            status: "FAILED",
            message: data.error ?? "An error occured during request execution."
        }
    }

    static Create<T>(data: { data?: T; message?: string }): IExamResponse<T> {
        return {
            success: true,
            code: HttpStatus.CREATED,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Created successfully."
        }
    }

    static Update<T>(data: { data?: T; message?: string }): IExamResponse<T> {
        return {
            success: true,
            code: HttpStatus.OK,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Updated successfully."
        }
    }

    static Fetch<T>(data: { data?: T[]; message?: string; pagination?: Partial<PaginationData> }): IExamResponse<T[]> {
        return {
            success: true,
            code: HttpStatus.OK,
            pagination: data.pagination ? {
                page: data.pagination.page ?? 1,
                pageSize: data.pagination.pageSize ?? 1,
                totalItems: data.pagination.totalItems ?? 0,
                totalPages: data.pagination.totalItems && data.pagination.pageSize ? Math.ceil(data.pagination.totalItems / data.pagination.pageSize) : 1
            } : null,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Fetched successfully."
        }
    }

    static Delete<T>(data: { data?: T; message?: string }): IExamResponse<T> {
        return {
            success: true,
            code: HttpStatus.OK,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Deleted successfully."
        }
    }

    static Unauthorised(message: string): IExamResponse<any> {
        return {
            success: false,
            code: HttpStatus.UNAUTHORIZED,
            data: null,
            status: "UNAUTHORISED",
            message: message ?? "Unauthorised request."
        }
    }
}
