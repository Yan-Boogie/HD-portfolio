import { motion, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import CardImageUI, { CardImageUIProps } from './CardImageUI';

import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';
import type { MotionVariantsTypes } from '../../types';

type CardImageMotionVariants = {
    [_key in MotionVariantsTypes]: Variant;
};

const cardImageMotionVariants: CardImageMotionVariants = {
    unviewed: { opacity: 0 },
    unhovered: { opacity: 1 },
    hovered: { opacity: 1, scale: 1.05 },
};

type MergedMotionProps = MergeWithMotion<CardImageUIProps>;
export interface CardImageMotionProps extends MergedMotionProps {};

const MotionCardImage: ReactFCWithRef<MergedMotionProps> = motion(CardImageUI);
const CardImageMotion = forwardRef<CardImageMotionProps, 'div'>((props, ref) => {
    const { ...rest } = props;

    return (
        <MotionCardImage
            ref={ref}
            whileHover="hovered"
            transition={{ type: 'Tween', duration: 0.7 }}
            variants={cardImageMotionVariants}
            {...rest} />
    )
});

export default CardImageMotion;
