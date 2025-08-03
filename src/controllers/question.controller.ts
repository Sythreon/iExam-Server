import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateQuestionRequest, GetQuestionsRequest, UpdateQuestionRequest } from '../constants/requests/question.requests';
import { Mapper } from '../utilities/mapper.util'
import { IExamResponse } from '../helpers/response.helper';
import { QuestionRepository } from '../repositories/question.repository';
import { Question } from '../constants/entities/question.entity';

@Controller('api/v1/question')
@ApiTags('Question API')
export class QuestionController {
    constructor() { }

    @Post('/create')
    @ApiOperation({ summary: "Create a question." })
    async CreateQuestion(@Body() request: CreateQuestionRequest, @Res() res: Response) {
        request = Mapper.map(request, CreateQuestionRequest);

        const response = await QuestionRepository.CreateQuestion(request);
        if (response.success) response.data = Mapper.map(response.data, Question);

        return IExamResponse.Send(response, res);
    }

    @Get('/get')
    @ApiOperation({ summary: "Get question(s)." })
    async GetQuestion(@Query() request: GetQuestionsRequest, @Res() res: Response) {
        request = Mapper.map(request, GetQuestionsRequest);

        const response = await QuestionRepository.GetQuestions(request);
        return IExamResponse.Send(response, res);
    }

    @Get('/find/:questionId')
    @ApiOperation({ summary: "Get a single question." })
    async FindQuestion(@Param('questionId') questionId: string, @Res() res: Response) {
        const response = await QuestionRepository.FindQuestion(questionId);

        return IExamResponse.Send(response, res);
    }

    @Delete('/delete/:questionId')
    @ApiOperation({ summary: "Delete a question." })
    async DeleteQuestion(@Param('questionId') questionId: string, @Res() res: Response) {
        const response = await QuestionRepository.DeleteQuestion(questionId);
        return IExamResponse.Send(response, res);
    }

    @Post('/update')
    @ApiOperation({ summary: "Update a question." })
    @ApiBody({ type: UpdateQuestionRequest })
    async UpdateQuestion(@Body() request: UpdateQuestionRequest, @Res() res: Response) {
        request = Mapper.map(request, UpdateQuestionRequest);

        const response = await QuestionRepository.UpdateQuestion(request);
        return IExamResponse.Send(response, res);
    }
}
