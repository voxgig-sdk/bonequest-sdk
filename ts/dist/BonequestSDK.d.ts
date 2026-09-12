import { EpisodeEntity } from './entity/EpisodeEntity';
import { QuoteEntity } from './entity/QuoteEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './BonequestTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BonequestEntityBase } from './BonequestEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class BonequestSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Episode(entopts?: Record<string, any>): EpisodeEntity;
    Quote(entopts?: Record<string, any>): QuoteEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BonequestSDK;
    tester(testopts?: any, sdkopts?: any): BonequestSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BonequestSDK;
export { stdutil, config, BaseFeature, BonequestEntityBase, BonequestSDK, SDK, };
