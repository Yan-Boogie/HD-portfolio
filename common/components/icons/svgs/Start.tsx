import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M63.93 43.9H118.58V221.09H63.93zM121.58 45.23L121.58 219.77 205.05 132.54 121.58 45.23z"
        />
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M121.58 40.9L121.58 43.9 121.58 45.23 205.05 132.54 121.58 219.77 121.58 221.09 121.58 224.09 209.19 132.54 121.58 40.91M121.58 45.23l-4.13-4.32H60.93V224.1h56.51l4.13-4.32V45.23zM63.93 221.09V43.9h54.65v177.19H63.93zM121.58 224.09L121.58 224.09 121.58 224.09 121.58 224.09z"
        />
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M121.58 221.09L121.58 219.77 117.45 224.09 118.58 224.09 121.58 224.09 121.58 224.09 121.58 221.09zM121.58 45.23L121.58 43.9 121.58 40.9 118.58 40.9 117.45 40.9 117.45 40.91 121.58 45.23z"
        />
    </>
);

const ActivePath = () => (
    <>
        <path
            stroke="var(--chakra-colors-iconColors-secondary)"
            fill="var(--chakra-colors-iconColors-primary)"
            d="M206.68 132.5L118.09 43.9 118.09 221.09 206.68 132.5z"
        />
        <path
            stroke="var(--chakra-colors-iconColors-secondary)"
            fill="var(--chakra-colors-brand-primary)"
            d="M63.44 43.9H118.09V221.09H63.44z"
        />
    </>
);

export const Start = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="0 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
