import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { BCMSPropRichTextParsed } from '../prop';

export interface SkillsEntryMetaItem {
    title: string;
    slug: string;
    javascrip: BCMSPropRichTextParsed;
    begineer: BCMSPropRichTextParsed;
}

export interface SkillsEntryMeta {
    en?: SkillsEntryMetaItem;
}

export interface SkillsEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: SkillsEntryMeta;
    content: BCMSEntryContentParsed;
}