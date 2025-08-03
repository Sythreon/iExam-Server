import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class ExceptionMiddleware implements ExceptionFilter {
    constructor();
    catch(exception: any, host: ArgumentsHost): Promise<void>;
}
