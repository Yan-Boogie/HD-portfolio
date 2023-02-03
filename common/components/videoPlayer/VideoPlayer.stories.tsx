import { ComponentMeta } from '@storybook/react';
import { chakra } from '@chakra-ui/react';

import VideoPlayer from './';

export default {
    title: 'Component/VideoPlayer',
    component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const link = 'https://vimeo.com/714795278';

export const Thumbnail = () => (
    <chakra.div w="380px" h="220px">
        <VideoPlayer previewSrc="/mock/mock-1.jpg" previewAlt="Mock Image" thumbnail url={link} />
    </chakra.div>
);
