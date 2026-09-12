import { BonequestEntityBase } from '../BonequestEntityBase';
import type { BonequestSDK } from '../BonequestSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../BonequestTypes';
declare class SearchEntity extends BonequestEntityBase<Search> {
    constructor(client: BonequestSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
