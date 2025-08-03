import { Response } from 'express';
import { CreateSessionRequest, GetSessionsRequest, UpdateSessionRequest } from '../constants/requests/session.requests';
export declare class SessionController {
    constructor();
    CreateSession(request: CreateSessionRequest, res: Response): Promise<any>;
    GetSession(request: GetSessionsRequest, res: Response): Promise<any>;
    FindSession(sessionId: string, res: Response): Promise<any>;
    DeleteSession(sessionId: string, res: Response): Promise<any>;
    UpdateSession(request: UpdateSessionRequest, res: Response): Promise<any>;
}
