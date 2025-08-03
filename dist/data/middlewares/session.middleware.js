"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplySessionMiddleware = ApplySessionMiddleware;
function ApplySessionMiddleware(schema) {
    schema.virtual('answers', {
        ref: 'answers',
        localField: 'sessionId',
        foreignField: 'sessionId',
        justOne: false,
        select: 'answerId questionId sessionId chosenOption question'
    });
    schema.set('toObject', { virtuals: true });
    schema.set('toJSON', { virtuals: true });
    schema.pre('find', function () { });
    schema.pre('findOne', function () {
        this.populate('answers');
    });
    return schema;
}
//# sourceMappingURL=session.middleware.js.map