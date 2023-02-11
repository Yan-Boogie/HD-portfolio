import { useRef, useState, useImperativeHandle, useEffect } from 'react';
import { motion, useInView, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';
import ThumbnailCardUI, { ThumbnailCardUIProps } from './ThumbnailCardUI';

type CardMotionVariantTypes = 'viewed' | 'unviewed';
type CardMotionVariants = {
    [_key in CardMotionVariantTypes]: Variant;
};

const cardMotionVariants: CardMotionVariants = {
    unviewed: { y: 12, opacity: 0 },
    viewed: { y: 0, opacity: 1 },
};

type MergedThumbnailCardMotionProps = MergeWithMotion<ThumbnailCardUIProps>;
const MotionThumbnailCard: ReactFCWithRef<MergedThumbnailCardMotionProps> = motion(ThumbnailCardUI);

export interface ThumbnailCardMotionProps extends MergedThumbnailCardMotionProps {}

const ThumbnailCardMotion = forwardRef<ThumbnailCardMotionProps, 'button'>((props, ref) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true });
    const [cardVariant, setCardVariant] = useState<CardMotionVariantTypes>('unviewed');

    useImperativeHandle(ref, () => cardRef.current);

    useEffect(() => {
        if (isCardInView) setCardVariant('viewed');
    }, [isCardInView]);

    return (
        <MotionThumbnailCard
            ref={cardRef}
            variants={cardMotionVariants}
            transition={{
                duration: 1,
            }}
            initial="unviewed"
            animate={cardVariant}
            {...props} />
    )
});

export default ThumbnailCardMotion;
