import { Expose } from 'class-transformer';
import { Session } from './session.entity';

export class Exception {
    @Expose()
    exceptionId: string;

    @Expose()
    sessionId: string;

    @Expose()
    date: number;

    @Expose()
    method: string;

    @Expose()
    url: string;

    @Expose()
    code: number;

    @Expose()
    message: string;

    session?: Session;
}