import { Session } from './session.entity';
export declare class Exception {
    exceptionId: string;
    date: string;
    method: string;
    url: string;
    code: number;
    message: string;
    metadata: string;
    session?: Session;
}
