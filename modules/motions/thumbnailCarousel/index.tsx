import { useState } from 'react';
import { chakra } from '@chakra-ui/react';

import IconButton from '@/common/components/buttons/iconButton';
import { Diamond, CarouselLeft, CarouselRight } from '@/common/components/icons/';
import CarouselItem from './components/carouselItem/';
import type { SlideItem } from './types';
import { VIDEO_HEIGHT, VIDEO_WIDTH } from './constants';


export interface ThumbnailCarouselProps {
    slideItems: SlideItem[];
};

const Wrapper = ({ children }: { children: React.ReactNode[]}) => (
    <chakra.div display="flex" w="full" pos="relative" backgroundColor="black">
        {children}
    </chakra.div>
);

// eslint-disable-next-line no-unused-vars
interface IndicatorProps { active: boolean; num: number, onClick: (_: number) => void; };
const Indicator = ({ active, num, onClick }: IndicatorProps) => (
    <IconButton animate={active ? 'active' : 'inactive'} margin="2" aria-label="indicator" onClick={() => onClick(num)}>
        <Diamond fontSize={['2xl', '3xl']} motiontype="noCircle" />
    </IconButton>
);

const ThumbnailCarousel = (props: ThumbnailCarouselProps) => {
    const { slideItems } = props;

    const [activated, setActivate] = useState<number>(0);

    console.log('activated-->\n', activated);

    const renderIndicators = () => (
        <chakra.div  pos="absolute" top="2" left="50%" transform="translateX(-50%)" display="flex" flexWrap="nowrap">
            {slideItems.map((el, idx) => (
                <Indicator active={idx === activated} key={el.idx} num={idx} onClick={(num) => setActivate(num)} />
            ))}
        </chakra.div>
    );

    const renderPrev = () => (
        <IconButton pos="absolute" left="2" top="50%" aria-label="prev button" onClick={() => setActivate(prev => {
            if (prev === 0) return slideItems.length - 1;

            return prev - 1;
        })}>
            <CarouselLeft motiontype="full" />
        </IconButton>
    );

    const renderNext = () => (
        <IconButton pos="absolute" right="2" top="50%" aria-label="next button" onClick={() => setActivate(prev => {
            if (prev === slideItems.length - 1) return 0;

            return prev + 1;
        })}>
            <CarouselRight motiontype="full" />
        </IconButton>
    );

    const renderPadder = () => (
        <chakra.div w={VIDEO_WIDTH} h={VIDEO_HEIGHT} />
    )

    return (
        <Wrapper>
            {slideItems.map((el, idx) => (
                <CarouselItem key={el.idx} slideItem={el} active={idx === activated} />
            ))}
            {renderPadder()}
            {renderIndicators()}
            {renderPrev()}
            {renderNext()}
        </Wrapper>
    );
};

export default ThumbnailCarousel;
