import { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { chakra, Divider } from '@chakra-ui/react';

import Page from './';
import Text from '../text';
import IconButton from '../buttons/iconButton';
import { CarouselRight } from '../icons';


export default {
    title: 'Component/Page',
    component: Page,
} as ComponentMeta<typeof Page>;

const PageWithContent = ({ idx, num }: { idx: number; num: number }) => {
    return idx === num ? (
        <Page layoutStyle="scroll">
            <chakra.div w="full" h="1680px">
                <Text as="h1">Page {idx + 1}</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
                <Text>Page Content</Text>
            </chakra.div>
        </Page>
    ) : null
};

export const PageWithTransition = () => {
    const [num, setNum] = useState<0 | 1>(0);

    return (
        <chakra.div padding={2}>
            <IconButton aria-label="switch" onClick={() => setNum(prev => prev === 1 ? 0 : 1)}>
                <CarouselRight motiontype="full" />
            </IconButton>
            <Divider orientation="horizontal" />
            {Array.from(Array(2)).map((_, idx) => (
                <PageWithContent key={idx} idx={idx} num={num} />
            ))}
        </chakra.div>
    );
};
