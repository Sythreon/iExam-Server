import { Question } from './question.entity';
export declare class Answer {
    answerId: string;
    questionId: string;
    sessionId: string;
    chosenOption: string;
    dateCreated: number;
    isDeleted: boolean;
    question?: Question;
}
