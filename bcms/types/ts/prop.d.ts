
import type { BCMSEntryContentNodeType, BCMSContentNodeAttrs } from './content';

export interface BCMSPropRichTextParsedNodeItem {
    type: BCMSEntryContentNodeType;
    attrs?: BCMSContentNodeAttrs;
    widgetName?: string;
    name?: string;
    value: string | {
        [name: string]: any
    };
}

export interface BCMSPropRichTextParsedNodes {
    nodes: BCMSPropRichTextParsedItem[];
}

export type BCMSPropRichTextParsed = BCMSPropRichTextParsedNodes

export interface BCMSPropDate {
    timestamp: number;
    timezoneOffset: number;
}

export type BCMSMediaType =
    | 'DIR'
    | 'IMG'
    | 'SVG'
    | 'VID'
    | 'TXT'
    | 'GIF'
    | 'OTH'
    | 'PDF'
    | 'JS'
    | 'HTML'
    | 'CSS'
    | 'JAVA';
                
export interface BCMSMedia {
    _id: string;
    src: string;
    name: string;
    width: number;
    height: number;
    caption: string;
    alt_text: string;
    svg?: string;
    type: BCMSMediaType;
    mimetype: string;
    size: number;
}
