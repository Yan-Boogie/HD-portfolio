import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react'; 
import IconButtonUI, { IconButtonUIProps } from './IconButtonUI';

import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type MotionVariantTypes = 'inactive' | 'active';
const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    inactive: 'inactive',
    active: 'active',
};

type MergedMotionProps = MergeWithMotion<IconButtonUIProps>;
export interface IconButtonMotionProps extends MergedMotionProps {};

const MotionIconButton: ReactFCWithRef<MergedMotionProps> = motion(IconButtonUI);
const IconButtonMotion = forwardRef<IconButtonMotionProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionIconButton
            ref={ref}
            initial={motionVariantTypes.inactive}
            whileHover={motionVariantTypes.active}
            {...rest} />
    );
});

export default IconButtonMotion;
