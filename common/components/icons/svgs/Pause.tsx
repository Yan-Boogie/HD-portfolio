import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M107.28 56.11v152.77H66.35V56.11h40.93m3-3H63.35v158.77h46.93V53.11zM203.77 56.11v152.77h-40.93V56.11h40.93m3-3h-46.93v158.77h46.93V53.11z"
        />
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M-64.55-312.45c87.2 0 157.89 70.69 157.89 157.89S22.65 3.33-64.55 3.33s-157.89-70.69-157.89-157.89 70.69-157.89 157.89-157.89m0-7c-44.04 0-85.45 17.15-116.59 48.29s-48.29 72.55-48.29 116.59 17.15 85.45 48.29 116.59 72.55 48.31 116.59 48.31S20.9-6.83 52.05-37.97s48.29-72.55 48.29-116.59-17.15-85.45-48.29-116.59-72.55-48.29-116.59-48.29z"
        />
    </>
);

const ActivePath = () => (
    <>
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            d="M66.35 56.11H107.28V208.88H66.35z"
        />
        <path
            fill="var(--chakra-colors-iconColors-primary)"
            d="M162.84 56.11H203.77V208.88H162.84z"
        />
    </>
);

export const Pause = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="10 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
