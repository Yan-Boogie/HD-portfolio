import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            strokeWidth="2"
            d="M135.06 43.9l88.59 88.59-88.59 88.59H46.47l88.59-88.59L46.47 43.9h88.59m1.24-3H39.23l5.12 5.12 86.47 86.47-86.47 86.48-5.12 5.12h97.08l.88-.88 88.59-88.59 2.12-2.12-2.12-2.12-88.6-88.6-.88-.88z"
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
            d="M135.06 132.5L135.06 43.9 46.47 43.9 135.06 132.5zM135.06 221.09L135.06 132.5 46.47 221.09 135.06 221.09z"
        />
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            d="M223.65 132.5L135.06 43.9 135.06 221.09 223.65 132.5z"
        />
    </>
);

export const CarouselRight = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="0 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
