import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M135.06 44.01l88.34 88.34-88.34 88.34-88.34-88.34 88.34-88.34m0-4.24l-2.12 2.12-88.34 88.34-2.12 2.12 2.12 2.12 88.34 88.34 2.12 2.12 2.12-2.12 88.34-88.34 2.12-2.12-2.12-2.12-88.34-88.34-2.12-2.12z"
        />
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M135.06 43L135.06 222"
        />
    </>
);

const ActivePath = () => (
    <>
        <path
            stroke="var(--chakra-colors-brand-primary)"
            fill="var(--chakra-colors-iconColors-primary)"
            d="M46.72 132.5L135.06 220.84 135.06 44.16 46.72 132.5z"
        />
        <path
            stroke="var(--chakra-colors-brand-primary)"
            fill="var(--chakra-colors-iconColors-secondary)"
            d="M135.06 220.84L223.4 132.5 135.06 44.16 135.06 220.84z"
        />
    </>
);

export const Diamond = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="10 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
