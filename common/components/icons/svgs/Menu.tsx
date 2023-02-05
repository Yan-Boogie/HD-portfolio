import { forwardRef } from '@chakra-ui/react';

import IconSwitch, { IconSwitchProps } from '../IconSwitch';

const InactivePath = () => (
    <>
        <path
            fill="none"
            stroke="var(--chakra-colors-iconColors-primary)"
            d="M217.42 179.01v17.23H52.7v-17.23h164.72m3-3H49.7v23.23h170.72v-23.23zM217.42 123.88v17.23H52.7v-17.23h164.72m3-3H49.7v23.23h170.72v-23.23zM52.7 68.74h164.72v17.23H52.7V68.74m0-3h-3v23.23h170.72V65.74H52.7z"
        />
    </>
);

const ActivePath = () => (
    <>
        <rect fill="var(--chakra-colors-iconColors-primary)" x="126.44" y="105.27" width="17.23" height="164.72" transform="translate(322.69 52.57) rotate(90)"/>
        <rect fill="var(--chakra-colors-iconColors-primary)" x="126.44" y="50.13" width="17.23" height="164.72" transform="translate(267.56 -2.56) rotate(90)"/>
        <rect fill="var(--chakra-colors-iconColors-primary)" x="126.44" y="-5" width="17.23" height="164.72" transform="translate(212.42 -57.7) rotate(90)"/>
    </>
);

export const Menu = forwardRef<IconSwitchProps, 'div' | 'svg'>((props, ref) => {
    const { ...rest } = props;

    return (
        <IconSwitch
            ref={ref}
            viewBox="10 0 270.12 264.99"
            pathBundle={[<InactivePath key="inactive" />, <ActivePath key="active" />]}
            {...rest} />
    );
});
