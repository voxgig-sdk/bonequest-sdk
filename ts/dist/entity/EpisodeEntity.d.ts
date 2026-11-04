import { BonequestEntityBase } from '../BonequestEntityBase';
import type { BonequestSDK } from '../BonequestSDK';
import type { Control } from '../types';
import type { Episode, EpisodeListMatch } from '../BonequestTypes';
declare class EpisodeEntity extends BonequestEntityBase<Episode> {
    constructor(client: BonequestSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
