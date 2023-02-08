export type Thumbnail = {
    idx: string;
    previewSrc: string;
    previewAlt: string;
    url: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

export type WindowRow = {
    style: React.CSSProperties;
    data: ([Thumbnail, Thumbnail, Thumbnail] | null)[];
    index: number;
};

export type WindowItem = {
    style: React.CSSProperties;
    data: (Thumbnail | null)[];
    index: number;
};
