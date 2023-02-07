import { chakra, forwardRef } from '@chakra-ui/react';

import VideoPlayer from '@/common/components/videoPlayer';
import { VIDEO_HEIGHT, VIDEO_WIDTH } from '../../constants';
import type { SlideItem } from '../../types';

export interface CarouselItemUIProps {
    slideItem: SlideItem;
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
            h={VIDEO_HEIGHT}
            w={VIDEO_WIDTH}
            onClick={onClick}
        >
            {children}
        </chakra.div>
    )
});

const CarouselItemUI = forwardRef<CarouselItemUIProps, 'button'>((props, ref) => {
    const { slideItem: { onClick, label, ...rest } } = props;

    return (
        <StyledButton ref={ref} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
        </StyledButton>
    );
});

export default CarouselItemUI;
