import { Schema } from 'mongoose';
import { Model, model } from 'mongoose';
import { Document } from 'mongoose';
import { Exception } from 'src/constants/entities/exception.entity';
import { Database } from './database';
import { Generator } from '../../utilities/generator.util';
import { SchemaProps } from '../../constants/models/schema.model';
import { ApplyExceptionMiddleware } from '../middlewares/exception.middleware';
import { HttpStatus } from '@nestjs/common';

type ExceptionProps = SchemaProps<Exception>;

const schema: Record<keyof ExceptionProps, any> = {
    exceptionId: { type: String, default: Generator.GenerateObjectID },
    method: { type: String },
    url: { type: String },
    code: { type: Number, default: HttpStatus.INTERNAL_SERVER_ERROR },
    message: { type: String },
    metadata: { type: String },
    date: { type: String, default: new Date().toISOString() }
}

export const ExceptionSchema: Schema = ApplyExceptionMiddleware(new Schema(schema));

export interface IExceptionDocument extends Exception, Document { };

export type ExceptionMod = Model<IExceptionDocument>;

export const ExceptionDb: ExceptionMod = model<IExceptionDocument>('exceptions', ExceptionSchema);

export const ExceptionDataAgent = new Database<Exception>();

ExceptionDataAgent.register(ExceptionDb)