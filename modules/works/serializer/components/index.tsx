import type { PortableTextComponents } from '@portabletext/react';

import Text from '@/common/components/text';
import ImageSerializer from './ImageSerializer';
import LinkSerializer from './LinkSerializer';
import VideoSerializer from './VideoSerializer';

const components: PortableTextComponents = {
    types: {
        image: ImageSerializer,
        video: VideoSerializer,
    },
    marks: {
        link: LinkSerializer,
    },
    block: {
        h1: ({ children }) => <Text variant="h1">{children}</Text>,
        h2: ({ children }) => <Text variant="h2">{children}</Text>,
        h3: ({ children }) => <Text variant="h3">{children}</Text>,
        h4: ({ children }) => <Text variant="h4">{children}</Text>,
        normal: ({ children }) => <Text>{children}</Text>,
    },
};

export default components;
