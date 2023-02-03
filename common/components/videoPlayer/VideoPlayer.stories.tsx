import { ComponentMeta } from '@storybook/react';
import { chakra } from '@chakra-ui/react';

import VideoPlayer from './';

export default {
    title: 'Component/VideoPlayer',
    component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const link = 'https://vimeo.com/714795278';

export const Thumbnail = () => (
    // We need a wrapper for video now
    <chakra.div w="380px" h="220px">
        <VideoPlayer thumbnail url={link} />
    </chakra.div>
);
