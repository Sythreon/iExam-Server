import { Schema } from 'mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Exception } from 'src/constants/entities/exception.entity';
import { Database } from './database';
export declare const ExceptionSchema: Schema;
export interface IExceptionDocument extends Exception, Document {
}
export type ExceptionMod = Model<IExceptionDocument>;
export declare const ExceptionDb: ExceptionMod;
export declare const ExceptionDataAgent: Database<Exception>;
