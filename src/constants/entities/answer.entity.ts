import { Expose } from 'class-transformer';
import { Question } from './question.entity';

export class Answer {
    @Expose()
    asnwerId: string;

    @Expose()
    questionId: string;

    @Expose()
    sessionId: string;

    @Expose()
    chosenOption: string;

    @Expose()
    dateCreated: number;

    isDeleted: boolean;

    question?: Question;
}