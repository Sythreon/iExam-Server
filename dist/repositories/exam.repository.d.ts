import { Session } from 'src/constants/entities/session.entity';
import { IExamResponse } from '../helpers/response.helper';
import { ExamCompletedResponse, ExamOngoingResponse } from 'src/constants/responses/exam.responses';
import { ExamAnswerRequest } from 'src/constants/requests/exam.requests';
export declare class ExamRepository {
    constructor();
    static Start(): Promise<IExamResponse<ExamOngoingResponse>>;
    static Answer(data: ExamAnswerRequest): Promise<IExamResponse<ExamOngoingResponse | ExamCompletedResponse>>;
    static Continue(session: Session, data: ExamAnswerRequest): Promise<IExamResponse<ExamOngoingResponse>>;
    static Complete(session: Session, data: ExamAnswerRequest): Promise<IExamResponse<ExamCompletedResponse>>;
}
