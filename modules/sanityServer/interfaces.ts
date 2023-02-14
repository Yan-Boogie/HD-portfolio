import type { BlockContentProps } from '@sanity/block-content-to-react';

export interface IMovie {
    id: string;
    previewSrc: string;
    movieUrl?: string
}

export interface IShowreel extends IMovie {};

type WorkType = 'motion' | 'illustration';

export interface IWork {
    id: string;
    workType: WorkType;
    title: string;
    description?: string;
    video?: IMovie;
    cover?: string;
    overview: BlockContentProps['blocks'];
};

export interface IMotion extends Pick<IWork, 'id' | 'title'>, Required<Pick<IWork, 'video'>> {
    section: 'carousel' | 'list';
};

export interface IIllustration extends Pick<IWork, 'id' | 'title' | 'description'>, Required<Pick<IWork, 'cover'>> {}
