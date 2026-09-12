import { BonequestEntityBase } from '../BonequestEntityBase';
import type { BonequestSDK } from '../BonequestSDK';
import type { Control } from '../types';
import type { Quote, QuoteListMatch } from '../BonequestTypes';
declare class QuoteEntity extends BonequestEntityBase<Quote> {
    constructor(client: BonequestSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    list(this: any, reqmatch?: QuoteListMatch, ctrl?: Control): Promise<QuoteEntity[]>;
}
export { QuoteEntity };
