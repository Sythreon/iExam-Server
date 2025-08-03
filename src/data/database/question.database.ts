import { Schema } from 'mongoose';
import { Model, model } from 'mongoose';
import { Document } from 'mongoose';
import { Question } from 'src/constants/entities/question.entity';
import { Database } from './database';
import { Generator } from '../../utilities/generator.util';
import { SchemaProps } from '../../constants/models/schema.model';
import { ApplyQuestionMiddleware } from '../middlewares/question.middleware';

type QuestionProps = SchemaProps<Question>;

const schema: Record<keyof QuestionProps, any> = {
    questionId: { type: String, default: Generator.GenerateObjectID },
    content: { type: String },
    correctAnswer: { type: String },
    options: { type: [String] },
    dateCreated: { type: Number, default: Date.now },
    isDeleted: { type: Boolean, default: false }
}

export const QuestionSchema: Schema = ApplyQuestionMiddleware(new Schema(schema));

export interface IQuestionDocument extends Question, Document { };

export type QuestionMod = Model<IQuestionDocument>;

export const QuestionDb: QuestionMod = model<IQuestionDocument>('questions', QuestionSchema);

export const QuestionDataAgent = new Database<Question>();

QuestionDataAgent.register(QuestionDb)