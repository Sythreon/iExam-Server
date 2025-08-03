import { ExamChoices } from "../models/exam.models";

export class ExamOngoingResponse {
    sessionId: string;
    questionId: string;
    questionNumber: number;
    question: string;
    choices: ExamChoices;
}

export class ExamCompletedResponse {
    sessionId: string;
    finalScore: string;
    result: string;
    remark: string;
}