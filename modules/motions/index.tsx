import { Divider, DividerProps } from '@chakra-ui/react';

import Page from '@/common/components/page';
import Text, { TextProps } from '@/common/components/text';
import ThumbnailList from './thumbnailList';
import ThumbnailCarousel from './thumbnailCarousel';

import type { SlideItem } from './thumbnailCarousel/types';
import type { ListItem } from './thumbnailList/types';

export interface MotionModuleProps {

}

const mockSlides: SlideItem[] = [{
    idx: '0',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    onClick: () => console.log('clicked'),
    label: 'Work Name',
}, {
    idx: '1',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    onClick: () => console.log('clicked'),
    label: 'Work Name',
}, {
    idx: '2',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    onClick: () => console.log('clicked'),
    label: 'Work Name',
}, {
    idx: '3',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    onClick: () => console.log('clicked'),
    label: 'Work Name',
}, {
    idx: '4',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    onClick: () => console.log('clicked'),
    label: 'Work Name',
}];

const mockList: ListItem[] = [{
    idx: '1',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
}, {
    idx: '2',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
}, {
    idx: '3',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
}, {
    idx: '4',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
}, {
    idx: '5',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
}, {
    idx: '6',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
}];

const StyledText = (props: TextProps) => (
    <Text textAlign="center" variant="h1" as="h1">{props.children}</Text>
);

const StyledDivider = (props: DividerProps) => (
    <Divider
        margin={{
            lg: '0 auto 10rem auto',
            md: '0 auto 8rem auto',
            base: '0 auto 4rem auto',
        }}
        width="20%"
        borderWidth={3}
        borderRadius={3}
        {...props} />
);

export default function MotionModule(props: MotionModuleProps) {
    return (
        <Page title="Motion">
            <ThumbnailCarousel slideItems={mockSlides} />
            <StyledText>More Motions</StyledText>
            <StyledDivider />
            <ThumbnailList listItems={mockList} />
        </Page>
    );
}
