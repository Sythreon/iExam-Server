import { Schema } from 'mongoose';

export function ApplyExceptionMiddleware(schema: Schema): Schema {
    schema.virtual('session', {
        ref: 'sessions',
        localField: 'sessionId',
        foreignField: 'sessionId',
        justOne: true,
        select: 'sessionId progress questionSeed optionSeed finalScore startTime endTime status answers'
    });

    schema.set('toObject', { virtuals: true });
    schema.set('toJSON', { virtuals: true });

    schema.pre('find', function () { });

    schema.pre('findOne', function () {
        this.populate('session');
    });

    return schema;
}