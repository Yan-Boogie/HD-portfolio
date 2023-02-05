import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            strokeWidth={2}
            d="M223.65 43.9l-88.59 88.59 88.59 88.59h-88.59L46.47 132.5l88.59-88.6h88.59m7.24-3h-97.08l-.88.88-88.58 88.6-2.12 2.12 2.12 2.12 88.59 88.59.88.88h97.08l-5.12-5.12-86.47-86.47 86.46-86.47 5.12-5.12z"
        />
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M135.06 43.9L135.06 221.09"
        />
    </>
);

const ActivePath = () => (
    <>
        <path
            fill="var(--chakra-colors-brand-primary)"
            strokeWidth="2"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M135.06 132.5L135.06 43.9 223.65 43.9 135.06 132.5zM135.06 221.09L135.06 132.5 223.65 221.09 135.06 221.09z"
        />
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            d="M46.47 132.5L135.06 43.9 135.06 221.09 46.47 132.5z"
        />
    </>
);

export const CarouselLeft = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="10 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
