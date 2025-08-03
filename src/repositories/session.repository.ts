import { Injectable } from '@nestjs/common';
import { Session } from 'src/constants/entities/session.entity';
import { SessionDataAgent } from 'src/data/database/session.database';
import { CreateSessionRequest, GetSessionsRequest, UpdateSessionRequest } from '../constants/requests/session.requests';
import { IExamResponse } from '../helpers/response.helper';
import { Mapper } from '../utilities/mapper.util';
import { Generator } from 'src/utilities/generator.util';

@Injectable()
export class SessionRepository {

    constructor() {
    }

    static async CreateSession(data: CreateSessionRequest): Promise<IExamResponse<Session>> {
        const session: Session = Mapper.map(data, Session);

        const newSession = await SessionDataAgent.Create(session);

        return IExamResponse.Create({ data: newSession, message: "Session created successfully." });
    }

    static async UpdateSession(data: UpdateSessionRequest): Promise<IExamResponse<Session>> {
        const session = await SessionDataAgent.Find({ sessionId: data.sessionId });
        if (!session) return IExamResponse.Failure({ error: "Session not found." });

        const result = await SessionDataAgent.Update({ sessionId: data.sessionId }, data);

        return IExamResponse.Update({ data: result, message: "Session updated successfully." });
    }

    static async DeleteSession(sessionId: string): Promise<IExamResponse<null>> {
        const session = await SessionDataAgent.Find({ sessionId });
        if (!session) return IExamResponse.Failure({ error: "Session not found." });

        await SessionDataAgent.Delete({ sessionId });

        return IExamResponse.Delete({ data: null, message: "Session deleted successfully." });
    }

    static async GetSessions(filters: GetSessionsRequest): Promise<IExamResponse<Session[]>> {
        const { page, pageSize, ...query } = filters;

        const sessions = await SessionDataAgent.Get(query, { page, pageSize });

        return IExamResponse.Fetch({
            data: sessions.data,
            pagination: sessions.pagination,
            message: "Sessions fetched successfully."
        });
    }

    static async FindSession(sessionId: string): Promise<IExamResponse<Session>> {
        const session = await SessionDataAgent.Find({ sessionId });
        if (!session) return IExamResponse.Failure({ error: "Session not found." });

        return IExamResponse.Success({ data: session, message: "Session fetched successfully." });
    }
}
