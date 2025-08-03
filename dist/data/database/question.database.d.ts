import { Schema } from 'mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Question } from 'src/constants/entities/question.entity';
import { Database } from './database';
export declare const QuestionSchema: Schema;
export interface IQuestionDocument extends Question, Document {
}
export type QuestionMod = Model<IQuestionDocument>;
export declare const QuestionDb: QuestionMod;
export declare const QuestionDataAgent: Database<Question>;
