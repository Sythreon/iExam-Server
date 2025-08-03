import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateSessionRequest, GetSessionsRequest, UpdateSessionRequest } from '../constants/requests/session.requests';
import { Mapper } from '../utilities/mapper.util'
import { IExamResponse } from '../helpers/response.helper';
import { SessionRepository } from '../repositories/session.repository';
import { Session } from '../constants/entities/session.entity';

@Controller('api/v1/session')
@ApiTags('Session API')
export class SessionController {
    constructor() { }

    @Post('/create')
    @ApiOperation({ summary: "Create a session." })
    async CreateSession(@Body() request: CreateSessionRequest, @Res() res: Response) {
        request = Mapper.map(request, CreateSessionRequest);

        const response = await SessionRepository.CreateSession(request);
        if (response.success) response.data = Mapper.map(response.data, Session);

        return IExamResponse.Send(response, res);
    }

    @Get('/get')
    @ApiOperation({ summary: "Get session(s)." })
    async GetSession(@Query() request: GetSessionsRequest, @Res() res: Response) {
        request = Mapper.map(request, GetSessionsRequest);

        const response = await SessionRepository.GetSessions(request);
        return IExamResponse.Send(response, res);
    }

    @Get('/find/:sessionId')
    @ApiOperation({ summary: "Get a single session." })
    async FindSession(@Param('sessionId') sessionId: string, @Res() res: Response) {
        const response = await SessionRepository.FindSession(sessionId);

        return IExamResponse.Send(response, res);
    }

    @Delete('/delete/:sessionId')
    @ApiOperation({ summary: "Delete a session." })
    async DeleteSession(@Param('sessionId') sessionId: string, @Res() res: Response) {
        const response = await SessionRepository.DeleteSession(sessionId);
        return IExamResponse.Send(response, res);
    }

    @Post('/update')
    @ApiOperation({ summary: "Update a session." })
    @ApiBody({ type: UpdateSessionRequest })
    async UpdateSession(@Body() request: UpdateSessionRequest, @Res() res: Response) {
        request = Mapper.map(request, UpdateSessionRequest);

        const response = await SessionRepository.UpdateSession(request);
        return IExamResponse.Send(response, res);
    }
}
