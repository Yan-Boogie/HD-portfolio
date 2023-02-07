import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';
import CarouselItemUI, { CarouselItemUIProps } from './CarouselItemUI';

import type { MergeWithMotion, MotionVariants, ReactFCWithRef } from '@/common/utils/typings';

type MotionVariantTypes = 'itemActive' | 'itemInactive';

const itemVariants: MotionVariants<MotionVariantTypes> = {
    itemActive: { zIndex: 'var(--chakra-zIndices-base', opacity: 1 },
    itemInactive: { zIndex: 'var(--chakra-zIndices-hide)', opacity: 0 },
};

type MergedMotionProps = MergeWithMotion<CarouselItemUIProps>;
export interface CarouselItemMotionProps extends MergedMotionProps {
    active: boolean;
};

const MotionCarouselItem: ReactFCWithRef<MergedMotionProps> = motion(CarouselItemUI);
const CarouselItemMotion = forwardRef<CarouselItemMotionProps, 'button'>((props, ref) => {
    const { active, ...rest } = props;

    return (
        <MotionCarouselItem
            ref={ref}
            initial="itemInactive"
            animate={active ? 'itemActive' : 'itemInactive'}
            variants={itemVariants}
            {...rest} />
    );
});

export default CarouselItemMotion;
