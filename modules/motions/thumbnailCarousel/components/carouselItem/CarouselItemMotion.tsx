import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import CarouselItemUI, { CarouselItemUIProps, StyledText } from './CarouselItemUI';

import type { MergeWithMotion, MotionVariants, ReactFCWithRef } from '@/common/utils/typings';

type MotionVariantTypes = 'itemActive' | 'itemInactive' | 'hovered';

const itemVariants: MotionVariants<MotionVariantTypes> = {
    itemActive: { zIndex: 'var(--chakra-zIndices-base', opacity: 1 },
    itemInactive: { zIndex: 'var(--chakra-zIndices-hide)', opacity: 0 },
    hovered: {},
};

const TextMotionVariants: MotionVariants<MotionVariantTypes> = {
    itemActive: { opacity: 0, x: -12 },
    itemInactive: { opacity: 0, x: -12 },
    hovered: { opacity: 1, x: 0, transition: { delay: 0.1 } },
};

type MergedMotionProps = MergeWithMotion<CarouselItemUIProps>;
export interface CarouselItemMotionProps extends MergedMotionProps {
    active: boolean;
};

const MotionText = motion<any>(StyledText);

const MotionCarouselItem: ReactFCWithRef<MergedMotionProps> = motion(CarouselItemUI);
const CarouselItemMotion = forwardRef<Omit<CarouselItemMotionProps, 'motionText'>, 'button'>((props, ref) => {
    const { active, ...rest } = props;

    return (
        <MotionCarouselItem
            ref={ref}
            initial="itemInactive"
            animate={active ? 'itemActive' : 'itemInactive'}
            variants={itemVariants}
            whileHover="hovered"
            motionText={<MotionText variants={TextMotionVariants}>{props.slideItem.label}</MotionText>}
            {...rest} />
    );
});

export default CarouselItemMotion;
