export type ListItem = {
    idx: string;
    previewSrc: string;
    previewAlt: string;
    url?: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};
