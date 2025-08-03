import { Expose } from 'class-transformer';
import { Answer } from './answer.entity';

export class Session {
    @Expose()
    sessionId: string;

    @Expose()
    progress: number;

    @Expose()
    questionSeed: number;

    @Expose()
    optionSeed: number;

    @Expose()
    score: number;

    @Expose()
    startTime: number;

    @Expose()
    endTime: number;

    @Expose()
    status: string;

    @Expose()
    dateCreated: number;

    isDeleted: boolean;

    answers?: Answer[];
}