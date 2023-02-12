import { chakra, forwardRef } from '@chakra-ui/react';

import Text from '@/common/components/text';
import VideoPlayer from '@/common/components/videoPlayer';
import { VIDEO_ASPECT_RATIO, VIDEO_WIDTH } from '../../constants';
import type { SlideItem } from '../../types';

export interface CarouselItemUIProps {
    slideItem: SlideItem;
    motionText: React.ReactNode;
};

interface StyledButton extends React.PropsWithChildren<{
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}> {};

const StyledButton = forwardRef<StyledButton, 'button'>((props, ref) => {
    const { onClick, children } = props;

    return (
        <chakra.div
            ref={ref}
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top="0"
            as="button"
            w={VIDEO_WIDTH}
            sx={{ aspectRatio: VIDEO_ASPECT_RATIO }}
            onClick={onClick}
        >
            {children}
        </chakra.div>
    )
});

export const StyledText = forwardRef<React.PropsWithChildren, 'h1'>(({ children }, ref) => (
    <Text
        ref={ref}
        as="h1"
        fontSize={{ xl: '8xl', md: '6xl', sm: '5xl', base: '4xl' }}
        variant="h1"
        initial="init"
        zIndex="docked"
        pos="absolute"
        bottom="4%"
        left="8%"
        color="white">
        {children}
    </Text>
));

const CarouselItemUI = forwardRef<CarouselItemUIProps, 'button'>((props, ref) => {
    const { slideItem: { onClick, ...rest }, motionText } = props;

    return (
        <StyledButton ref={ref} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
            {motionText}
        </StyledButton>
    );
});

export default CarouselItemUI;
