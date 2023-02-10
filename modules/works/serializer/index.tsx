import type { BlockContentProps } from '@sanity/block-content-to-react';
import { PortableText } from '@portabletext/react';

import components from './components';

export interface SerializerProps {
    value: BlockContentProps['blocks'];
}

const Serializer = (props: SerializerProps) => {
    const { value } = props;

    return (
        <PortableText value={value} components={components} />
    );
}

export default Serializer;
