import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateAnswerRequest, GetAnswersRequest, UpdateAnswerRequest } from '../constants/requests/answer.requests';
import { Mapper } from '../utilities/mapper.util'
import { IExamResponse } from '../helpers/response.helper';
import { AnswerRepository } from '../repositories/answer.repository';
import { Answer } from '../constants/entities/answer.entity';

@Controller('api/v1/answer')
@ApiTags('Answer API')
export class AnswerController {
    constructor() { }

    @Post('/create')
    @ApiOperation({ summary: "Create a answer." })
    async CreateAnswer(@Body() request: CreateAnswerRequest, @Res() res: Response) {
        request = Mapper.map(request, CreateAnswerRequest);

        const response = await AnswerRepository.CreateAnswer(request);
        if (response.success) response.data = Mapper.map(response.data, Answer);

        return IExamResponse.Send(response, res);
    }

    @Get('/get')
    @ApiOperation({ summary: "Get answer(s)." })
    async GetAnswer(@Query() request: GetAnswersRequest, @Res() res: Response) {
        request = Mapper.map(request, GetAnswersRequest);

        const response = await AnswerRepository.GetAnswers(request);
        return IExamResponse.Send(response, res);
    }

    @Get('/find/:answerId')
    @ApiOperation({ summary: "Get a single answer." })
    async FindAnswer(@Param('answerId') answerId: string, @Res() res: Response) {
        const response = await AnswerRepository.FindAnswer(answerId);

        return IExamResponse.Send(response, res);
    }

    @Delete('/delete/:answerId')
    @ApiOperation({ summary: "Delete a answer." })
    async DeleteAnswer(@Param('answerId') answerId: string, @Res() res: Response) {
        const response = await AnswerRepository.DeleteAnswer(answerId);
        return IExamResponse.Send(response, res);
    }

    @Post('/update')
    @ApiOperation({ summary: "Update a answer." })
    @ApiBody({ type: UpdateAnswerRequest })
    async UpdateAnswer(@Body() request: UpdateAnswerRequest, @Res() res: Response) {
        request = Mapper.map(request, UpdateAnswerRequest);

        const response = await AnswerRepository.UpdateAnswer(request);
        return IExamResponse.Send(response, res);
    }
}
