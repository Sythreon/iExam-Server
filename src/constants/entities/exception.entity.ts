import { Expose } from 'class-transformer';
import { Session } from './session.entity';

export class Exception {
    @Expose()
    exceptionId: string;

    @Expose()
    date: string;

    @Expose()
    method: string;

    @Expose()
    url: string;

    @Expose()
    code: number;

    @Expose()
    message: string;

    @Expose()
    metadata: string;

    session?: Session;
}