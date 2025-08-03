import { Schema } from 'mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { Session } from 'src/constants/entities/session.entity';
import { Database } from './database';
export declare const SessionSchema: Schema;
export interface ISessionDocument extends Session, Document {
}
export type SessionMod = Model<ISessionDocument>;
export declare const SessionDb: SessionMod;
export declare const SessionDataAgent: Database<Session>;
