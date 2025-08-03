import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class Generator {
  static GenerateObjectID() {
    const objectId = new mongoose.Types.ObjectId().toString()
    return objectId;
  }
}
