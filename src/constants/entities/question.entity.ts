import { Expose } from 'class-transformer';

export class Question {
    @Expose()
    questionId: string;

    @Expose()
    content: string;

    @Expose()
    correctAnswer: number;

    @Expose()
    options: string[];

    @Expose()
    dateCreated: number;

    isDeleted: boolean;
}