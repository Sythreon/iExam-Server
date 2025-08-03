import { Response } from 'express';
import { CreateAnswerRequest, GetAnswersRequest, UpdateAnswerRequest } from '../constants/requests/answer.requests';
export declare class AnswerController {
    constructor();
    CreateAnswer(request: CreateAnswerRequest, res: Response): Promise<any>;
    GetAnswer(request: GetAnswersRequest, res: Response): Promise<any>;
    FindAnswer(answerId: string, res: Response): Promise<any>;
    DeleteAnswer(answerId: string, res: Response): Promise<any>;
    UpdateAnswer(request: UpdateAnswerRequest, res: Response): Promise<any>;
}
