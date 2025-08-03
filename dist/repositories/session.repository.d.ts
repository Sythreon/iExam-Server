import { Session } from 'src/constants/entities/session.entity';
import { CreateSessionRequest, GetSessionsRequest, UpdateSessionRequest } from '../constants/requests/session.requests';
import { IExamResponse } from '../helpers/response.helper';
export declare class SessionRepository {
    constructor();
    static CreateSession(data: CreateSessionRequest): Promise<IExamResponse<Session>>;
    static UpdateSession(data: UpdateSessionRequest): Promise<IExamResponse<Session>>;
    static DeleteSession(sessionId: string): Promise<IExamResponse<null>>;
    static GetSessions(filters: GetSessionsRequest): Promise<IExamResponse<Session[]>>;
    static FindSession(sessionId: string): Promise<IExamResponse<Session>>;
    static CompleteSession(sessionId: string, finalScore: number, status: string): Promise<null>;
}
