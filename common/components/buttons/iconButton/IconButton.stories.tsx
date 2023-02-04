import { ComponentMeta } from '@storybook/react';

import IconButton from './';
import { CarouselRight } from '../../icons';

export default {
    title: 'Component/Button/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const WithMotion = () => (
    <IconButton aria-label="example" onClick={() => console.log('clicked')}>
        <CarouselRight motiontype="full" />
    </IconButton>
);
