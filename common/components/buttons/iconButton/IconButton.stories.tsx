import { ComponentMeta } from '@storybook/react';
import { HStack } from '@chakra-ui/react';

import IconButton from './';
import {
    CarouselRight,
    Start,
    Pause,
    Close,
    Menu,
    CarouselLeft,
    Diamond,
} from '../../icons';

export default {
    title: 'Component/Button/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const ButtonsWithMotion = () => (
    <HStack>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <CarouselRight motiontype="full" />
        </IconButton>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <Start motiontype="full" />
        </IconButton>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <Pause motiontype="full" />
        </IconButton>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <Close motiontype="full" />
        </IconButton>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <Menu motiontype="full" />
        </IconButton>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <CarouselLeft motiontype="full" />
        </IconButton>
        <IconButton aria-label="example" onClick={() => console.log('clicked')}>
            <Diamond motiontype="full" />
        </IconButton>
    </HStack>
);
