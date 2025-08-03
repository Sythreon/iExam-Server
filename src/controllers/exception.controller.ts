import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { GetExceptionsRequest } from '../constants/requests/exception.requests';
import { Mapper } from '../utilities/mapper.util'
import { IExamResponse } from '../helpers/response.helper';
import { ExceptionRepository } from '../repositories/exception.repository';

@Controller('api/v1/exception')
@ApiTags('Exception API')
export class ExceptionController {
    constructor() { }

    @Get('/get')
    @ApiOperation({ summary: "Get exception(s)." })
    async GetException(@Query() request: GetExceptionsRequest, @Res() res: Response) {
        request = Mapper.map(request, GetExceptionsRequest);

        const response = await ExceptionRepository.GetExceptions(request);
        return IExamResponse.Send(response, res);
    }

    @Get('/find/:exceptionId')
    @ApiOperation({ summary: "Get a single exception." })
    async FindException(@Param('exceptionId') exceptionId: string, @Res() res: Response) {
        const response = await ExceptionRepository.FindException(exceptionId);

        return IExamResponse.Send(response, res);
    }
}
