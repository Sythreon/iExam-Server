import { Injectable } from '@nestjs/common';
import { toNumber } from 'lodash';
import { Model } from 'mongoose';
import { PaginatedDbResponse, PaginatedRequest } from '../../constants/models/pagination.models';

@Injectable()
export class Database<T> {
  private db: Model<any>;

  register(db: Model<any>) {
    this.db = db;
  }

  async Create(data: Partial<T>): Promise<T> {
    const result = await (await this.db.create(data)).save();
    return result;
  }

  async Find(filters: Partial<T> | Record<any, any>): Promise<T> {
    const result = await this.db.findOne({ ...filters, isDeleted: { $ne: true } }).lean().exec();
    return result as T;
  }

  async Get(filters: Partial<T> | Record<any, any>, pagination?: PaginatedRequest, sorting?: Record<string, number>): Promise<PaginatedDbResponse<T>> {
    const numericPage = toNumber(pagination?.page ?? 1);
    const numericPageSize = toNumber(pagination?.pageSize ?? 999);
    const skip = (numericPage - 1) * numericPageSize;

    const data = await this.db.find({ ...filters, isDeleted: { $ne: true } }).sort({ dateCreated: -1, ...sorting }).skip(skip).limit(numericPageSize).lean().exec();
    const total = await this.db.countDocuments({ ...filters, isDeleted: { $ne: true } });

    return {
      data: data as T[],
      pagination: {
        page: numericPage,
        pageSize: numericPageSize,
        totalItems: total
      }
    } as PaginatedDbResponse<T>
  }

  async Update(filters: Partial<T> | Record<any, any>, data: Partial<T>): Promise<T> {
    const options = {
      new: true,
      runValidators: true
    };
    const result = await this.db.findOneAndUpdate(
      filters,
      { $set: data },
      options,
    );
    return result;
  }

  async UpdateAll(filters: Partial<T> | Record<any, any>, data: Partial<T>): Promise<null> {
    const result = await this.db.updateMany(
      filters,
      { $set: data }
    );
    return null;
  }

  async Delete(filters: Partial<T> | Record<any, any>): Promise<null> {
    await this.db.findOneAndUpdate(filters, { $set: { isDeleted: true } });
    return null;
  }

  async DeleteAll(filters: Partial<T> | Record<any, any>): Promise<null> {
    await this.db.updateMany(filters, { $set: { isDeleted: true } });
    return null;
  }
}
