import { Response } from 'express';
import { ExamAnswerRequest } from '../constants/requests/exam.requests';
export declare class ExamController {
    constructor();
    CreateExam(request: any, res: Response): Promise<any>;
    AnswerExam(request: ExamAnswerRequest, res: Response): Promise<any>;
}
