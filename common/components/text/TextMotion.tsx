import { motion } from 'framer-motion';
import { Text as CKUText, forwardRef, TextProps as CKUTextProps } from '@chakra-ui/react';
import type { MotionVariants } from '@/common/utils/typings';

type TextMotionVariantTypes = 'visible' | 'invisible';


const textVariants: MotionVariants<TextMotionVariantTypes> = {
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export interface TextMotionProps extends CKUTextProps {
    getMotionProps: () => { initial: TextMotionVariantTypes; animate: TextMotionVariantTypes } | undefined;
};

const MotionText = motion<CKUTextProps>(CKUText);
const TextMotion = forwardRef<TextMotionProps, 'p'>((props, ref) => {
    const { getMotionProps, ...rest } = props;

    if (typeof getMotionProps !== 'function') {
        return <CKUText {...rest} />
    }

    return (
      <MotionText
        ref={ref}
        {...getMotionProps()}
        variants={textVariants}
        {...rest} />
    );
});

export default TextMotion;