import { motion, Variant } from 'framer-motion';
import { chakra, forwardRef, Box } from '@chakra-ui/react';

import IconUI, { IconUIProps } from './IconUI';
import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type IconMotionVariantsTypes = 'inactive' | 'active' | 'hovered' | 'init';
type IconMotionVariants = {
    [_key in IconMotionVariantsTypes]: Variant;
};

const initIconVariants: IconMotionVariants = {
    init: {
        opacity: 0,
    },
    inactive: {
        opacity: 1,
    },
    active: {
        opacity: 0,
    },
    hovered: {
        opacity: 0,
    },
};

const activeIconVariants: IconMotionVariants = {
    init: {
        opacity: 0,
    },
    inactive: {
        opacity: 0,
    },
    active: {
        opacity: 1,
    },
    hovered: {
        opacity: 1,
    },
};

const circleVariants: IconMotionVariants = {
    init: { opacity: 0, pathLength: 0 },
    inactive: { opacity: 0, pathLength: 0 },
    active: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
            opacity: { duration: 0.01 }
        }
    },
    hovered: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
            opacity: { duration: 0.01 }
        }
    },
};

type InactivePath = React.ReactElement;
type ActivePath = React.ReactElement;

type MergedMotionProps = MergeWithMotion<IconUIProps>;
export interface IconMotionProps extends Omit<MergedMotionProps, 'variant'> {
    pathBundle: [InactivePath, ActivePath] | [ActivePath];
};

const MotionIcon: ReactFCWithRef<MergedMotionProps> = motion(IconUI);

const IconMotion = forwardRef<IconMotionProps, 'div'>((props, ref) => {
    const { pathBundle, ...rest } = props;

    if (pathBundle.length === 1) return (
        <MotionIcon variants={activeIconVariants} {...rest}>
            {pathBundle[0]}
        </MotionIcon>
    );

    return (
        <chakra.div ref={ref} pos="relative">
            <MotionIcon variants={initIconVariants} {...rest}>
                {pathBundle[0]}
            </MotionIcon>
            <MotionIcon variants={activeIconVariants} variant="overlap" {...rest}>
                {pathBundle[1]}
            </MotionIcon>
            <Box
                backgroundColor="transparent"
                pos="absolute"
                top="0"
                left="0"
                viewBox="0 0 200 200"
                width="140%"
                height="140%"
                transform="translate(-18%, -18%)"
                as={motion.svg}>
                <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    variants={circleVariants}
                    fill="transparent"
                    strokeWidth={2}
                    stroke="var(--chakra-colors-iconColors-primary)" />
            </Box>
        </chakra.div>
        
    );
})

export default IconMotion;
