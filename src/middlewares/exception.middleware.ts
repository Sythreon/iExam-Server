import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ExceptionRepository } from 'src/repositories/exception.repository';
import { IExamResponse } from '../helpers/response.helper';

@Catch()
export class ExceptionMiddleware implements ExceptionFilter {
    constructor() { }

    async catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const body = request.body;
        const params = request.params;
        const query = request.query;

        const exceptionCode = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionMessage = exception.message || JSON.stringify(exception);

        if (exceptionCode !== HttpStatus.FORBIDDEN || exceptionCode !== HttpStatus.UNAUTHORIZED) {
            await ExceptionRepository.CreateException({
                date: new Date().toISOString(),
                method: request.method.toString(),
                url: request.url,
                code: exceptionCode,
                message: exceptionMessage,
                metadata: JSON.stringify({ body, params, query })
            });
        }

        response
            .status(exceptionCode)
            .send(
                exceptionCode === HttpStatus.UNAUTHORIZED ?
                    IExamResponse.Unauthorised(exceptionMessage) :
                    IExamResponse.Error({ error: exceptionMessage, data: exception?.response })
            );
    }
}
