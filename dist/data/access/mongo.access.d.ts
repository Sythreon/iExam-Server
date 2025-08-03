import Mongoose = require('mongoose');
declare class MongooseAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    constructor();
    static connect(): Mongoose.Connection;
}
export { MongooseAccess };
