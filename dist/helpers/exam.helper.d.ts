import { Answer } from "src/constants/entities/answer.entity";
import { Question } from "src/constants/entities/question.entity";
import { Session } from "src/constants/entities/session.entity";
import { ExamChoices } from "src/constants/models/exam.models";
export declare class ExamHelper {
    private static performanceRemarks;
    private static mulberry32;
    private static seededShuffle;
    static getQuestion(session: Session, questions: Question[]): {
        question: Question;
        choices: ExamChoices;
    };
    static gradeAnswers(session: Session, answers: Answer[]): {
        finalScore: number;
        remark: string;
    };
}
