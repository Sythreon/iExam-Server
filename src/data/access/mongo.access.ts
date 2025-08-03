import Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

class MongooseAccess {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;

  constructor() {
    MongooseAccess.connect();
  }

  static connect(): Mongoose.Connection {
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

    // If the connection throws an error
    this.mongooseConnection.on('error', (msg) => {
      console.log('Mongoose default connection message: ', msg);
    });

    // When the connection is disconnected
    this.mongooseConnection.on('disconnected', () => {
      setTimeout(function () {
        this.mongooseInstance = Mongoose.connect(connectionString);
      }, 10000);
      console.log('Mongoose default connection disconnected.');
    });

    // When the connection is reconnected
    this.mongooseConnection.on('reconnected', () => {
      console.log('Mongoose default connection is reconnected.');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
      this.mongooseConnection.close();
      console.log(
        'Mongoose default connection disconnected through app termination.',
      );
      process.exit(0);
    });

    return this.mongooseInstance;
  }
}

MongooseAccess.connect();
export { MongooseAccess };
