import { Question } from './question.entity';
export declare class Answer {
    answerId: string;
    questionId: string;
    sessionId: string;
    selectedChoice: string;
    dateCreated: number;
    isDeleted: boolean;
    question?: Question;
}
