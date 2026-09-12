import { Context } from './Context';
declare class BonequestError extends Error {
    isBonequestError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BonequestError };
