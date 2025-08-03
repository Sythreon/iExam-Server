import { ExamChoices } from "../models/exam.models";
export declare class ExamOngoingResponse {
    sessionId: string;
    questionId: string;
    questionNumber: number;
    question: string;
    choices: ExamChoices;
}
export declare class ExamCompletedResponse {
    sessionId: string;
    finalScore: string;
    result: string;
    remark: string;
}
