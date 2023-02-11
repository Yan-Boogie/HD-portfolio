import { useRef, useState, useImperativeHandle, useEffect } from 'react';
import { motion, useInView, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';
import ThumbnailCardUI, { ThumbnailCardUIProps, StyledText } from './ThumbnailCardUI';

type CardMotionVariantTypes = 'viewed' | 'unviewed' | 'hovered';
type CardMotionVariants = {
    [_key in CardMotionVariantTypes]: Variant;
};

type TextMotionVariants = {
    [_key in CardMotionVariantTypes]: Variant;
};

const cardMotionVariants: CardMotionVariants = {
    unviewed: { y: 12, opacity: 0 },
    viewed: { y: 0, opacity: 1 },
    hovered: {},
};

const TextMotionVariants: TextMotionVariants = {
    unviewed: { opacity: 0, x: -12 },
    viewed: { opacity: 0, x: -12 },
    hovered: { opacity: 1, x: 0, transition: { delay: 0.1 } },
}

const MotionText = motion<any>(StyledText);

type MergedThumbnailCardMotionProps = MergeWithMotion<ThumbnailCardUIProps>;
const MotionThumbnailCard: ReactFCWithRef<MergedThumbnailCardMotionProps> = motion(ThumbnailCardUI);

export interface ThumbnailCardMotionProps extends MergedThumbnailCardMotionProps {}

const ThumbnailCardMotion = forwardRef<Omit<ThumbnailCardMotionProps, 'motionText'>, 'button'>((props, ref) => {
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
            whileHover="hovered"
            motionText={<MotionText variants={TextMotionVariants}>{props.listItem.text}</MotionText>}
            {...props} />
    )
});

export default ThumbnailCardMotion;
