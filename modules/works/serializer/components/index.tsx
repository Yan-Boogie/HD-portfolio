import { chakra } from '@chakra-ui/react';
import type { PortableTextComponents } from '@portabletext/react';

import Text, { TextProps } from '@/common/components/text';
import ImageSerializer from './ImageSerializer';
import LinkSerializer from './LinkSerializer';
import VideoSerializer from './VideoSerializer';

const TextBlockSerializer = (props: TextProps) => (
    <Text marginBottom={6} {...props} />
);

const ItalicSerializer = ({ children }: React.PropsWithChildren) => (
    <chakra.em color="iconColors.secondary">{children}</chakra.em>
)

const BoldSerializer = ({ children }: React.PropsWithChildren) => (
    <chakra.b color="iconColors.primary">{children}</chakra.b>
)

const components: PortableTextComponents = {
    types: {
        image: ImageSerializer,
        video: VideoSerializer,
    },
    marks: {
        link: LinkSerializer,
        em: ({ children }) => <ItalicSerializer>{children}</ItalicSerializer>,
        strong: ({ children }) => <BoldSerializer>{children}</BoldSerializer>,
    },
    block: {
        h1: ({ children }) => <TextBlockSerializer variant="h1">{children}</TextBlockSerializer>,
        h2: ({ children }) => <TextBlockSerializer variant="h2">{children}</TextBlockSerializer>,
        h3: ({ children }) => <TextBlockSerializer variant="h3">{children}</TextBlockSerializer>,
        h4: ({ children }) => <TextBlockSerializer variant="h4">{children}</TextBlockSerializer>,
        normal: ({ children }) => <TextBlockSerializer>{children}</TextBlockSerializer>,
    },
};

export default components;
