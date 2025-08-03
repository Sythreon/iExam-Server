import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PaginatedRequest } from '../models/pagination.models';
import { SessionStatusEnum } from '../enums/session.enums';

export class CreateSessionRequest {
    @Expose()
    @ApiProperty({ example: 10 })
    numberOfQuestions: number;

    @Expose()
    @ApiProperty({ example: 10 })
    durationInMinutes: number;
}

export class GetSessionsRequest extends PaginatedRequest {
    @Expose()
    @ApiProperty({ example: '03-05-2001', required: false })
    date?: string;

    @Expose()
    @ApiProperty({ example: SessionStatusEnum.PENDING, required: false })
    status?: string;
}

export class UpdateSessionRequest {
    @Expose()
    @ApiProperty({ example: '1234567' })
    sessionId: string;

    @Expose()
    @ApiProperty({ example: 10 })
    numberOfQuestions?: number;
}