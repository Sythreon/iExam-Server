import { Schema } from 'mongoose';
import { Model, model } from 'mongoose';
import { Document } from 'mongoose';
import { Session } from 'src/constants/entities/session.entity';
import { Database } from './database';
import { Generator } from '../../utilities/generator.util';
import { SchemaProps } from '../../constants/models/schema.model';
import { ApplySessionMiddleware } from '../middlewares/session.middleware';
import { SessionStatusEnum } from 'src/constants/enums/session.enums';

type SessionProps = SchemaProps<Session>;

const schema: Record<keyof SessionProps, any> = {
    sessionId: { type: String, default: Generator.GenerateObjectID },
    questionSeed: { type: Number },
    optionSeed: { type: Number },
    numberOfQuestions: { type: Number, default: 10 },
    durationInMinutes: { type: Number, default: 10 },
    progress: { type: Number, default: 0 },
    finalScore: { type: Number, default: 0 },
    startTime: { type: Number, default: Date.now() },
    endTime: { type: Number, default: Date.now() + 60 * 10 * 1000 }, // Default of 10 minutes.
    status: { type: String, default: SessionStatusEnum.PENDING },
    dateCreated: { type: Number, default: Date.now },
    isDeleted: { type: Boolean, default: false }
}

export const SessionSchema: Schema = ApplySessionMiddleware(new Schema(schema));

export interface ISessionDocument extends Session, Document { };

export type SessionMod = Model<ISessionDocument>;

export const SessionDb: SessionMod = model<ISessionDocument>('sessions', SessionSchema);

export const SessionDataAgent = new Database<Session>();

SessionDataAgent.register(SessionDb)