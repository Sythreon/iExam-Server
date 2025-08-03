import { Session } from './session.entity';
export declare class Exception {
    exceptionId: string;
    userId: string;
    date: number;
    method: string;
    url: string;
    code: number;
    message: string;
    session?: Session;
}
