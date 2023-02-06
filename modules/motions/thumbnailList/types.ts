export type Thumbnail = {
    previewSrc: string;
    previewAlt: string;
    url: string;
} | null;

export type WindowItem = {
    style: React.CSSProperties;
    data: Thumbnail[];
    index: number;
};
