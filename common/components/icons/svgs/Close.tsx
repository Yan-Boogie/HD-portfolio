import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            stroke="var(--chakra-colors-iconColors-primary)"
            fill="none"
            strokeWidth={2}
            d="M196.98 56.11L135.06 118.03 73.14 56.11 58.68 56.11 58.68 70.58 58.68 70.58 58.68 70.59 120.59 132.5 58.68 194.41 58.68 194.41 58.68 194.42 58.68 208.88 73.14 208.88 135.06 146.97 196.98 208.88 211.45 194.41 149.53 132.5 211.45 70.58 196.98 56.11zM211.45 208.88L211.45 194.42 196.98 208.88 211.45 208.88z"
        />
        <path
            stroke="var(--chakra-colors-iconColors-primary)"
            fill="none"
            strokeWidth={2}
            d="M196.98 56.11L211.45 70.58 211.45 56.11 196.98 56.11z"
        />
    </>
);

const ActivePath = () => (
    <>
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            d="M196.98 56.11L135.06 118.03 73.14 56.11 58.68 56.11 58.68 70.58 58.68 70.58 58.68 70.59 120.59 132.5 58.68 194.41 58.68 194.41 58.68 194.42 58.68 208.88 73.14 208.88 135.06 146.97 196.98 208.88 211.45 194.41 149.53 132.5 211.45 70.58 196.98 56.11zM211.45 208.88L211.45 194.42 196.98 208.88 211.45 208.88z"
        />
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            d="M196.98 56.11L211.45 70.58 211.45 56.11 196.98 56.11z"
        />
    </>
);

export const Close = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="10 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
