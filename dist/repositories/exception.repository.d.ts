import { Exception } from 'src/constants/entities/exception.entity';
import { CreateExceptionRequest, GetExceptionsRequest } from '../constants/requests/exception.requests';
import { IExamResponse } from '../helpers/response.helper';
export declare class ExceptionRepository {
    constructor();
    static CreateException(data: CreateExceptionRequest): Promise<IExamResponse<Exception>>;
    static DeleteException(exceptionId: string): Promise<IExamResponse<null>>;
    static GetExceptions(filters: GetExceptionsRequest): Promise<IExamResponse<Exception[]>>;
    static FindException(exceptionId: string): Promise<IExamResponse<Exception>>;
}
