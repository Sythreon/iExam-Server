import { Response } from 'express';
import { CreateQuestionRequest, GetQuestionsRequest, UpdateQuestionRequest } from '../constants/requests/question.requests';
export declare class QuestionController {
    constructor();
    CreateQuestion(request: CreateQuestionRequest, res: Response): Promise<any>;
    GetQuestion(request: GetQuestionsRequest, res: Response): Promise<any>;
    FindQuestion(questionId: string, res: Response): Promise<any>;
    DeleteQuestion(questionId: string, res: Response): Promise<any>;
    UpdateQuestion(request: UpdateQuestionRequest, res: Response): Promise<any>;
}
