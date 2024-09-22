

export type BCMSEntryContentNodeType =
    | 'paragraph'
    | 'heading'
    | 'widget'
    | 'bulletList'
    | 'listItem'
    | 'orderedList'
    | 'text'
    | 'codeBlock'
    | 'hardBreak';

export interface BCMSEntryContentNodeHeadingAttr {
    level: number;
}

export interface BCMSEntryContentNodeLinkAttr {
    href: string;
    target: string;
}

export interface BCMSEntryContentNodeWidgetAttr {
    data: PropValueWidgetData;
    propPath: string;
}

export type BCMSContentNodeAttrs =
    | BCMSEntryContentNodeHeadingAttr
    | BCMSEntryContentNodeWidgetAttr
    | BCMSEntryContentNodeLinkAttr;
    
export interface BCMSEntryContentParsedItem {
    type: BCMSEntryContentNodeType;
    attrs?: BCMSContentNodeAttrs;
    name?: string;
    value: string;
}

export interface BCMSEntryContentParsed {
    en?: BCMSEntryContentParsedItem[];
}
