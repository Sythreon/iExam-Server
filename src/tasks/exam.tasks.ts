import { SessionDataAgent } from "src/data/database/session.database";
import { SessionStatusEnum } from "src/constants/enums/session.enums";
import { ExamRepository } from "src/repositories/exam.repository";

export class ExamTasks {

    static async timeOutSessions() {
        const sessions = await SessionDataAgent.Get({ status: SessionStatusEnum.ONGOING });

        for (let session of sessions.data) {
            const now = Date.now();

            if (session.endTime && now > session.endTime) {
                await ExamRepository.Complete(session);
            }
        }
    };
};