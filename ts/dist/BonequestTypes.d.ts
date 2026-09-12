export interface Episode {
    episodes?: any[];
    id?: string;
    meta?: Record<string, any>;
}
export interface EpisodeLoadMatch {
    id: number;
}
export interface Quote {
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
export interface QuoteListMatch {
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
