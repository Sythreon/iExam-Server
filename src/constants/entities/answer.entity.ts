import { Expose } from 'class-transformer';
import { Question } from './question.entity';

export class Answer {
    @Expose()
    answerId: string;

    @Expose()
    questionId: string;

    @Expose()
    sessionId: string;

    @Expose()
    selectedChoice: string;

    @Expose()
    dateCreated: number;

    isDeleted: boolean;

    question?: Question;
}