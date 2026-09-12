import { BonequestEntityBase } from '../BonequestEntityBase';
import type { BonequestSDK } from '../BonequestSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch } from '../BonequestTypes';
declare class EpisodeEntity extends BonequestEntityBase<Episode> {
    constructor(client: BonequestSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
}
export { EpisodeEntity };
