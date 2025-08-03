import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateQuestionRequest {
    @Expose()
    @ApiProperty({ example: "What is the capital of France?" })
    content: string;

    @Expose()
    @ApiProperty({ example: "Paris" })
    correctAnswer: string;

    @Expose()
    @ApiProperty({ example: ["Rome", "Paris", "London", "Marseille", "Lyon"] })
    choices: string[];
}

export class GetQuestionsRequest extends PaginatedRequest {
    @Expose()
    @ApiProperty({ example: 'What is the capital of', required: false })
    content?: string;
}

export class UpdateQuestionRequest {
    @Expose()
    @ApiProperty({ example: '1234567' })
    questionId: string;

    @Expose()
    @ApiProperty({ example: "What is the capital of France?" })
    content?: string;

    @Expose()
    @ApiProperty({ example: "Paris" })
    correctAnswer?: string;

    @Expose()
    @ApiProperty({ example: ["Rome", "Paris", "London", "Marseille", "Lyon"] })
    choices?: string[];
}