"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamHelper = void 0;
const answer_enums_1 = require("../constants/enums/answer.enums");
class ExamHelper {
    static mulberry32(seed) {
        return function () {
            let t = seed += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }
    static seededShuffle(array, seed) {
        const rng = this.mulberry32(seed);
        const result = array.slice();
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
    static getQuestion(session, questions) {
        const shuffledQuestions = this.seededShuffle(questions, session.questionSeed);
        const question = shuffledQuestions[session.progress - 1];
        const shuffledChoices = this.seededShuffle(question.choices, session.choiceSeed);
        return {
            question: question,
            choices: {
                A: shuffledChoices[0],
                B: shuffledChoices[1],
                C: shuffledChoices[2],
                D: shuffledChoices[3],
                E: shuffledChoices[4]
            }
        };
    }
    static gradeAnswers(session, answers) {
        let correctAnswers = 0;
        for (let answer of answers) {
            const shuffledChoices = this.seededShuffle(answer.question.choices, session.choiceSeed);
            if (answer.question.correctAnswer === shuffledChoices[answer_enums_1.AnswerIndexEnum[answer.selectedChoice]])
                correctAnswers += 1;
        }
        const finalScore = Math.floor((correctAnswers / session.numberOfQuestions) * 100);
        let remark = this.performanceRemarks.EXCELLENT;
        if (finalScore <= 80)
            remark = this.performanceRemarks.GOOD;
        if (finalScore <= 60)
            remark = this.performanceRemarks.FAIR;
        if (finalScore <= 40)
            remark = this.performanceRemarks.POOR;
        if (finalScore <= 20)
            remark = this.performanceRemarks.ABYSMAL;
        return {
            finalScore,
            remark
        };
    }
}
exports.ExamHelper = ExamHelper;
ExamHelper.performanceRemarks = {
    ABYSMAL: "Your performance falls significantly below expectations. It is essential to revisit the foundational material and seek additional support to strengthen your understanding moving forward.",
    POOR: "Your results indicate limited grasp of the core concepts. Focused revision and engagement with the subject matter are recommended to improve future outcomes.",
    FAIR: "Your performance demonstrates partial understanding, but there is room for substantial improvement. Continued practice and clarification of key areas will be beneficial.",
    GOOD: "You have shown a good understanding of the material. With more refinement and consistency, you are well-positioned to achieve even stronger results.",
    EXCELLENT: "Excellent performance. You have demonstrated a strong command of the subject. Maintain your current momentum and continue striving for mastery."
};
//# sourceMappingURL=exam.helper.js.map