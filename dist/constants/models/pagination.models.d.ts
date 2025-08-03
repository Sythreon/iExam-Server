export declare class PaginationData {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}
export declare class PaginatedRequest {
    page: number;
    pageSize: number;
}
export declare class PaginatedDbResponse<T> {
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        totalItems: number;
    };
}
