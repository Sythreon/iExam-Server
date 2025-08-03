import { Response } from 'express';
import { GetExceptionsRequest } from '../constants/requests/exception.requests';
export declare class ExceptionController {
    constructor();
    GetException(request: GetExceptionsRequest, res: Response): Promise<any>;
    FindException(exceptionId: string, res: Response): Promise<any>;
}
