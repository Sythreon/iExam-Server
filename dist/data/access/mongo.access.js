"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseAccess = void 0;
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
class MongooseAccess {
    constructor() {
        MongooseAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        const connectionString = process.env.MONGODB_DB_URI;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Connection to a MongoDB is opened.');
        });
        this.mongooseInstance = Mongoose.connect(connectionString);
        this.mongooseConnection.on('connected', () => {
            console.log('Mongoose default connection open to ' + connectionString);
        });
        this.mongooseConnection.on('error', (msg) => {
            console.log('Mongoose default connection message: ', msg);
        });
        this.mongooseConnection.on('disconnected', () => {
            setTimeout(function () {
                this.mongooseInstance = Mongoose.connect(connectionString);
            }, 10000);
            console.log('Mongoose default connection disconnected.');
        });
        this.mongooseConnection.on('reconnected', () => {
            console.log('Mongoose default connection is reconnected.');
        });
        process.on('SIGINT', () => {
            this.mongooseConnection.close();
            console.log('Mongoose default connection disconnected through app termination.');
            process.exit(0);
        });
        return this.mongooseInstance;
    }
}
exports.MongooseAccess = MongooseAccess;
MongooseAccess.connect();
//# sourceMappingURL=mongo.access.js.map