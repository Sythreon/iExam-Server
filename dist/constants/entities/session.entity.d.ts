import { Answer } from './answer.entity';
export declare class Session {
    sessionId: string;
    progress: number;
    questionSeed: number;
    optionSeed: number;
    score: number;
    startTime: number;
    endTime: number;
    status: string;
    dateCreated: number;
    isDeleted: boolean;
    answers?: Answer[];
}
