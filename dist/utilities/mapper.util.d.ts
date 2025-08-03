import { ClassConstructor } from 'class-transformer';
export declare class Mapper {
    static map<T>(data: any, klass: ClassConstructor<T>): T;
}
