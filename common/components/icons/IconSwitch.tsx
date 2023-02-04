import { forwardRef } from '@chakra-ui/react';

import IconMotion, { IconMotionProps } from './IconMotion';
import IconUI, { IconUIProps } from './IconUI';

type IsIconUIProps = (el: any) => el is IconUIProps;
const isIconUIProps = ((el) => (el.motiontype === 'none')) as IsIconUIProps;

export type IconSwitchProps = { motiontype: 'full' | 'none' | 'half' } & (IconMotionProps | IconUIProps);

const IconSwitch = forwardRef<IconSwitchProps, 'svg'>((props, ref) => {
    if (isIconUIProps(props)) {
        const { fontSize = ['4xl', '6xl'], ...rest } = props;

        return (
            <IconUI fontSize={fontSize} ref={ref} {...rest} />
        );
    }

    const { fontSize = ['4xl', '6xl'], motiontype, pathBundle, ...rest } = props;

    if (motiontype === 'half') return (
        <IconMotion
            fontSize={fontSize}
            pathBundle={[pathBundle[pathBundle.length - 1]]}
            {...rest} />
    )

    return (
        <IconMotion
            fontSize={fontSize}
            pathBundle={pathBundle}
            {...rest} />
    );
});

export default IconSwitch;
