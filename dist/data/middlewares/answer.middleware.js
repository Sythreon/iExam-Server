"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyAnswerMiddleware = ApplyAnswerMiddleware;
function ApplyAnswerMiddleware(schema) {
    schema.virtual('question', {
        ref: 'questions',
        localField: 'questionId',
        foreignField: 'questionId',
        justOne: true,
        select: 'questionId content correctAnswer choices'
    });
    schema.set('toObject', { virtuals: true });
    schema.set('toJSON', { virtuals: true });
    schema.pre('find', function () {
        this.populate('question');
    });
    schema.pre('findOne', function () {
        this.populate('question');
    });
    return schema;
}
//# sourceMappingURL=answer.middleware.js.map