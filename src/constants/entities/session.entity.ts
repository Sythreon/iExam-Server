import { Expose } from 'class-transformer';
import { Answer } from './answer.entity';

export class Session {
    @Expose()
    sessionId: string;

    @Expose()
    questionSeed: number;

    @Expose()
    optionSeed: number;

    @Expose()
    progress: number;

    @Expose()
    finalScore: number;

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