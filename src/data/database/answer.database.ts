import { Schema } from 'mongoose';
import { Model, model } from 'mongoose';
import { Document } from 'mongoose';
import { Answer } from 'src/constants/entities/answer.entity';
import { Database } from './database';
import { Generator } from '../../utilities/generator.util';
import { SchemaProps } from '../../constants/models/schema.model';
import { ApplyAnswerMiddleware } from '../middlewares/answer.middleware';

type AnswerProps = SchemaProps<Answer>;

const schema: Record<keyof AnswerProps, any> = {
    answerId: { type: String, default: Generator.GenerateObjectID },
    questionId: { type: String },
    sessionId: { type: String },
    selectedChoice: { type: String },
    dateCreated: { type: Number, default: Date.now },
    isDeleted: { type: Boolean, default: false }
}

export const AnswerSchema: Schema = ApplyAnswerMiddleware(new Schema(schema));

export interface IAnswerDocument extends Answer, Document { };

export type AnswerMod = Model<IAnswerDocument>;

export const AnswerDb: AnswerMod = model<IAnswerDocument>('answers', AnswerSchema);

export const AnswerDataAgent = new Database<Answer>();

AnswerDataAgent.register(AnswerDb)