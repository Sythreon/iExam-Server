import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { AnswerChoiceEnum } from '../enums/answer.enums';

export class ExamAnswerRequest {
    @Expose()
    @ApiProperty({ example: "1234567" })
    sessionId: string;

    @Expose()
    @ApiProperty({ example: "1234567" })
    questionId: string;

    @Expose()
    @ApiProperty({ example: AnswerChoiceEnum.A })
    selectedChoice: string;
}

export class SubmitExamRequest {
    @Expose()
    @ApiProperty({ example: "1234567" })
    sessionId: string;
}

