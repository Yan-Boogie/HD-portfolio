import { motion } from 'framer-motion';
import { Text as CKUText, forwardRef, TextProps as CKUTextProps } from '@chakra-ui/react';
import type { MotionVariants, MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

export type TextMotionVariantTypes = 'visible' | 'invisible' | 'hovered' | 'init';

const textVariants: MotionVariants<TextMotionVariantTypes> = {
    init: {
        opacity: 0,
    },
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    hovered: {
        opacity: 1,
    },
};

type MergedMotionProps = MergeWithMotion<CKUTextProps>;
export interface TextMotionProps extends MergedMotionProps {
    initial?: TextMotionVariantTypes;
    animate?: TextMotionVariantTypes;
};

const MotionText: ReactFCWithRef<MergedMotionProps> = motion(CKUText);
const TextMotion = forwardRef<TextMotionProps, any>((props, ref) => {
    const { initial, animate, ...rest } = props;

    return (
      <MotionText
        ref={ref}
        initial={initial}
        animate={animate}
        variants={textVariants}
        {...rest} />
    );
});

export default TextMotion;
