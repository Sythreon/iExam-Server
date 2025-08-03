import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationData {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedRequest {
    @Expose()
    @ApiProperty({ example: 1 })
    page: number;
    
    @Expose()
    @ApiProperty({ example: 10 })
    pageSize: number;
}

export class PaginatedDbResponse<T> {
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        totalItems: number;
    }
}