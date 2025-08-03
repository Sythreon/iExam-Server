import { Expose } from 'class-transformer';

export class Question {
    @Expose()
    questionId: string;

    @Expose()
    content: string;

    @Expose()
    correctAnswer: string;

    @Expose()
    options: string[];

    @Expose()
    dateCreated: number;

    isDeleted: boolean;
}