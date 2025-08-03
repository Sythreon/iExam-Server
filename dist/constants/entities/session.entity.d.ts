import { Answer } from './answer.entity';
export declare class Session {
    sessionId: string;
    questionSeed: number;
    optionSeed: number;
    numberOfQuestions: number;
    durationInMinutes: number;
    progress: number;
    finalScore: number;
    startTime: number;
    endTime: number;
    status: string;
    dateCreated: number;
    isDeleted: boolean;
    answers?: Answer[];
}
