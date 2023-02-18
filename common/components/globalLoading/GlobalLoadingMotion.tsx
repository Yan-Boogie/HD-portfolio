import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import GlobalLoadingUI from './GlobalLoadingUI';
import type { MotionVariants, MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

export type MotionVariantTypes = 'exist' | 'inexist';

const loadingVariants: MotionVariants<MotionVariantTypes> = {
    exist: {
        display: ['none', 'flex', 'flex'],
        opacity: [0, 0, 0.5],
        transition: {
            times: [0, 0.1, 1],
        },
    },
    inexist: {
        display: 'none',
        opacity: 0,
    },
};

type MergedMotionProps = MergeWithMotion<{}>;
const MotionGlobalLoading: ReactFCWithRef<MergedMotionProps> = motion(GlobalLoadingUI);

export interface GlobalLoadingMotionProps extends MergedMotionProps {
    motionStatus: MotionVariantTypes;
};

const GlobalLoadingMotion = forwardRef<GlobalLoadingMotionProps, 'div'>((props, ref) => {
    const { motionStatus, ...rest } = props;

    return (
        <MotionGlobalLoading
            ref={ref}
            initial="inexist"
            animate={motionStatus}
            variants={loadingVariants}
            {...rest} />
    );
});

export default GlobalLoadingMotion;
