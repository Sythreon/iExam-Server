import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateExceptionRequest {
    @Expose()
    @ApiProperty({ example: "1234567" })
    sessionId: string;

    @Expose()
    @ApiProperty({ example: 1234567890 })
    date: number;

    @Expose()
    @ApiProperty({ example: "POST" })
    method: string;

    @Expose()
    @ApiProperty({ example: "https://iexam.onrender.com/api/v1/session/create" })
    url: string;

    @Expose()
    @ApiProperty({ example: 500 })
    code: number;

    @Expose()
    @ApiProperty({ example: "Failed to create session." })
    message?: string;
}

export class GetExceptionsRequest extends PaginatedRequest {
    @Expose()
    @ApiProperty({ example: "1234567", required: false })
    sessionId?: string;

    @Expose()
    @ApiProperty({ example: "GET", required: false })
    method?: string;

    @Expose()
    @ApiProperty({ example: "1234567", required: false })
    url?: string;

    @Expose()
    @ApiProperty({ example: 500, required: false })
    code?: string;
}