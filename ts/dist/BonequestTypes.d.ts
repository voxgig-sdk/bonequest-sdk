export interface Episode {
    day?: number;
    dialog?: any[];
    episode?: number;
    hd?: any[];
    height?: number;
    hifi?: Record<string, any>;
    image?: string;
    month?: number;
    navigation?: Record<string, any>;
    players?: any[];
    tags?: any[];
    thumb?: string;
    title?: string;
    width?: number;
    year?: number;
}
export interface EpisodeListMatch {
    episode_number: number;
}
export interface Quote {
}
export interface QuoteListMatch {
    $action?: string;
    [action: string]: any;
}
export interface Search {
    day?: number;
    dialog?: any[];
    episode?: number;
    hd?: any[];
    height?: number;
    hifi?: Record<string, any>;
    image?: string;
    month?: number;
    navigation?: Record<string, any>;
    players?: any[];
    tags?: any[];
    thumb?: string;
    title?: string;
    width?: number;
    year?: number;
}
export interface SearchListMatch {
    q: string;
}
