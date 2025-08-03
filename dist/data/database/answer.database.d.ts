import { Schema } from 'mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Answer } from 'src/constants/entities/answer.entity';
import { Database } from './database';
export declare const AnswerSchema: Schema;
export interface IAnswerDocument extends Answer, Document {
}
export type AnswerMod = Model<IAnswerDocument>;
export declare const AnswerDb: AnswerMod;
export declare const AnswerDataAgent: Database<Answer>;
