import { Model } from 'mongoose';
import { PaginatedDbResponse, PaginatedRequest } from '../../constants/models/pagination.models';
export declare class Database<T> {
    private db;
    register(db: Model<any>): void;
    Create(data: Partial<T>): Promise<T>;
    Find(filters: Partial<T> | Record<any, any>): Promise<T>;
    Get(filters: Partial<T> | Record<any, any>, pagination?: PaginatedRequest, sorting?: Record<string, number>): Promise<PaginatedDbResponse<T>>;
    Update(filters: Partial<T> | Record<any, any>, data: Partial<T>): Promise<T>;
    UpdateAll(filters: Partial<T> | Record<any, any>, data: Partial<T>): Promise<null>;
    Delete(filters: Partial<T> | Record<any, any>): Promise<null>;
    DeleteAll(filters: Partial<T> | Record<any, any>): Promise<null>;
}
