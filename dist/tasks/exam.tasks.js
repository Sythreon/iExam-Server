"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamTasks = void 0;
const session_database_1 = require("../data/database/session.database");
const session_enums_1 = require("../constants/enums/session.enums");
const exam_repository_1 = require("../repositories/exam.repository");
class ExamTasks {
    static async timeOutSessions() {
        const sessions = await session_database_1.SessionDataAgent.Get({ status: session_enums_1.SessionStatusEnum.ONGOING });
        for (let session of sessions.data) {
            const now = Date.now();
            if (session.endTime && now > session.endTime) {
                await exam_repository_1.ExamRepository.Complete(session);
            }
        }
    }
    ;
}
exports.ExamTasks = ExamTasks;
;
//# sourceMappingURL=exam.tasks.js.map