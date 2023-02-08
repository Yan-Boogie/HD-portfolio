import { Box } from '@chakra-ui/react';

import Page from '@/common/components/page';
import Text from '@/common/components/text';
import ThumbnailList from './thumbnailList';
import ThumbnailCarousel from './thumbnailCarousel';

import type { SlideItem } from './thumbnailCarousel/types';

export interface MotionModuleProps {

}

const mock: SlideItem[] = [{
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

const MoreMotionsWrapper = ({ children }: React.PropsWithChildren) => (
    <Box w="full" maxWidth="80vw" h="80vh" margin="16px auto" overflow="hidden">
        {children}
    </Box>
);

export default function MotionModule(props: MotionModuleProps) {
    return (
        <Page title="Motion">
            <ThumbnailCarousel slideItems={mock} />
            <MoreMotionsWrapper>
                <Text variant="h1" as="h1">More Motions</Text>
                <ThumbnailList />
            </MoreMotionsWrapper>
        </Page>
    );
}
