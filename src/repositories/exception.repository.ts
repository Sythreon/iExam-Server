import { Injectable } from '@nestjs/common';
import { Exception } from 'src/constants/entities/exception.entity';
import { ExceptionDataAgent } from 'src/data/database/exception.database';
import { CreateExceptionRequest, GetExceptionsRequest } from '../constants/requests/exception.requests';
import { IExamResponse } from '../helpers/response.helper';
import { Mapper } from '../utilities/mapper.util';

@Injectable()
export class ExceptionRepository {

    constructor() {
    }

    static async CreateException(data: CreateExceptionRequest): Promise<IExamResponse<Exception>> {
        const exception: Exception = Mapper.map(data, Exception);

        const newException = await ExceptionDataAgent.Create(exception);

        return IExamResponse.Create({ data: newException, message: "Exception created successfully." });
    }

    static async DeleteException(exceptionId: string): Promise<IExamResponse<null>> {
        const exception = await ExceptionDataAgent.Find({ exceptionId });
        if (!exception) return IExamResponse.Failure({ error: "Exception not found." });

        await ExceptionDataAgent.Delete({ exceptionId });

        return IExamResponse.Delete({ data: null, message: "Exception deleted successfully." });
    }

    static async GetExceptions(filters: GetExceptionsRequest): Promise<IExamResponse<Exception[]>> {
        const { page, pageSize, ...query } = filters;

        const exceptions = await ExceptionDataAgent.Get(query, { page, pageSize });

        return IExamResponse.Fetch({
            data: exceptions.data,
            pagination: exceptions.pagination,
            message: "Exceptions fetched successfully."
        });
    }

    static async FindException(exceptionId: string): Promise<IExamResponse<Exception>> {
        const exception = await ExceptionDataAgent.Find({ exceptionId });
        if (!exception) return IExamResponse.Failure({ error: "Exception not found." });

        return IExamResponse.Success({ data: exception, message: "Exception fetched successfully." });
    }
}
