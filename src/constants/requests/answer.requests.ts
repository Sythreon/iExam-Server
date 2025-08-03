import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PaginatedRequest } from '../models/pagination.models';
import { AnswerChoiceEnum } from '../enums/answer.enums';

export class CreateAnswerRequest {
    @Expose()
    @ApiProperty({ example: "1234567" })
    questionId: string;

    @Expose()
    @ApiProperty({ example: "1234567" })
    sessionId: string;

    @Expose()
    @ApiProperty({ example: AnswerChoiceEnum.A })
    selectedChoice: string;
}

export class GetAnswersRequest extends PaginatedRequest {
    @Expose()
    @ApiProperty({ example: '1234567', required: false })
    sessionId?: string;
}

export class UpdateAnswerRequest {
    @Expose()
    @ApiProperty({ example: '1234567' })
    answerId: string;

    @Expose()
    @ApiProperty({ example: AnswerChoiceEnum.A })
    selectedChoice?: string;
}