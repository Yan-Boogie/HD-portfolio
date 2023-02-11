import { useState, useRef } from 'react';
import { chakra, forwardRef } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

import IconButton from '@/common/components/buttons/iconButton';
import { Diamond, CarouselLeft, CarouselRight } from '@/common/components/icons/';
import CarouselItem from './components/carouselItem/';
import type { SlideItem } from './types';
import { VIDEO_ASPECT_RATIO, VIDEO_WIDTH, INDICATOR_SIZE, PREV_NEXT_SIZE } from './constants';


export interface ThumbnailCarouselProps {
    slideItems: SlideItem[];
};

const Wrapper = forwardRef<{ children: React.ReactNode[]}, 'div'>(({ children }, ref) => (
    <chakra.div ref={ref} margin="4rem 0" display="flex" w="full" pos="relative" backgroundColor="black">
        {children}
    </chakra.div>
));

const MotionWrapper = motion(Wrapper);

// eslint-disable-next-line no-unused-vars
interface IndicatorProps { active: boolean; num: number, onClick: (_: number) => void; };
const Indicator = ({ active, num, onClick }: IndicatorProps) => (
    <IconButton animate={active ? 'active' : 'inactive'} margin="2" aria-label="indicator" onClick={() => onClick(num)}>
        <Diamond fontSize={INDICATOR_SIZE} motiontype="noCircle" />
    </IconButton>
);

const ThumbnailCarousel = (props: ThumbnailCarouselProps) => {
    const { slideItems } = props;

    const [activated, setActivate] = useState<number>(0);

    const wrapperRef = useRef(null);
    const isWrapperInView = useInView(wrapperRef, { once: true });

    const renderIndicators = () => (
        <chakra.div  pos="absolute" top="2" left="50%" transform="translateX(-50%)" display="flex" flexWrap="nowrap">
            {slideItems.map((el, idx) => (
                <Indicator active={idx === activated} key={el.idx} num={idx} onClick={(num) => setActivate(num)} />
            ))}
        </chakra.div>
    );

    const renderPrev = () => (
        <IconButton pos="absolute" left="2" top="50%" transform="translateY(-50%)" aria-label="prev button" onClick={() => setActivate(prev => {
            if (prev === 0) return slideItems.length - 1;

            return prev - 1;
        })}>
            <CarouselLeft fontSize={PREV_NEXT_SIZE} motiontype="full" />
        </IconButton>
    );

    const renderNext = () => (
        <IconButton pos="absolute" right="2" top="50%" transform="translateY(-50%)" aria-label="next button" onClick={() => setActivate(prev => {
            if (prev === slideItems.length - 1) return 0;

            return prev + 1;
        })}>
            <CarouselRight fontSize={PREV_NEXT_SIZE} motiontype="full" />
        </IconButton>
    );

    const renderPadder = () => (
        <chakra.div w={VIDEO_WIDTH} sx={{ aspectRatio: VIDEO_ASPECT_RATIO }} />
    )

    return (
        <MotionWrapper
            ref={wrapperRef}
            initial={{ opacity: 0 }}
            animate={isWrapperInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {slideItems.map((el, idx) => (
                <CarouselItem key={el.idx} slideItem={el} active={idx === activated} />
            ))}
            {renderPadder()}
            {renderIndicators()}
            {renderPrev()}
            {renderNext()}
        </MotionWrapper>
    );
};

export default ThumbnailCarousel;
