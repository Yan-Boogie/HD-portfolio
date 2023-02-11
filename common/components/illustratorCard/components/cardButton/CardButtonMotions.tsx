import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import CardButtonUI, { CardButtonUIProps, BorderLine } from './CardButtonUI';
import type { MotionVariants, MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type MotionVariantTypes = 'hovered' | 'unhovered' | 'tap';

const cardButtonVariants: MotionVariants<MotionVariantTypes> = {
    hovered: { opacity: 1 },
    unhovered: { opacity: 0.3 },
    tap: { opacity: 1 },
};

const borderLineVariants: MotionVariants<MotionVariantTypes> = {
    unhovered: { transform: 'translateX(-80%)' },
    hovered: { transform: 'translateX(0%)' },
    tap: { transform: 'translateX(0%)', transition: { duration: 0.01 } },
};

type MergedMotionProps = MergeWithMotion<CardButtonUIProps>;

const MotionCardButton: ReactFCWithRef<MergedMotionProps> = motion(CardButtonUI);
const MotionBorderLine = motion(BorderLine);

export interface CardButtonMotionProps extends MergedMotionProps{};

const CardButtonMotion = forwardRef<CardButtonMotionProps, 'button'>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <MotionCardButton
            ref={ref}
            initial="unhovered"
            whileHover="hovered"
            whileTap="tap"
            variants={cardButtonVariants}
            {...rest}>
            {children}
            <MotionBorderLine
                transition={{ type: 'Tween' }}
                variants={borderLineVariants} />
        </MotionCardButton>
    );
});

export default CardButtonMotion;
