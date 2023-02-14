export type SlideItem = {
    idx: string;
    previewSrc: string;
    previewAlt: string;
    url?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    label: string;
};
