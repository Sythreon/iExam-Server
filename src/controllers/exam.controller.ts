import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ExamAnswerRequest } from '../constants/requests/exam.requests';
import { IExamResponse } from '../helpers/response.helper';
import { ExamRepository } from '../repositories/exam.repository';

@Controller('api/v1/exam')
@ApiTags('Exam API')
export class ExamController {
    constructor() { }

    @Post('/start-exam')
    @ApiOperation({ summary: "Start an exam." })
    async CreateExam(@Body() request: any, @Res() res: Response) {
        const response = await ExamRepository.Start();
        return IExamResponse.Send(response, res);
    }

    @Post('/answer')
    @ApiOperation({ summary: "Start an exam." })
    async AnswerExam(@Body() request: ExamAnswerRequest, @Res() res: Response) {
        const response = await ExamRepository.Answer(request);
        return IExamResponse.Send(response, res);
    }
}
