import React from 'react';
import { forwardRef, chakra } from '@chakra-ui/react';

import VideoPlayer from '@/common/components/videoPlayer';
import Text from '@/common/components/text';
import type { ListItem } from '../../types';

export interface ThumbnailCardUIProps {
    listItem: ListItem;
    smoothBorder?: boolean;
    motionText: React.ReactNode;
};

const BUTTON_WIDTH = '100%';
const BUTTON_ASPECT_RATIO = 0.8;

interface StyledButtonProps {
    smoothBorder: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    children: React.ReactNode;
}
const StyledButton = forwardRef<StyledButtonProps, 'button'>((props, ref) => {
    const { onClick, children, smoothBorder } = props;

    return (
        <chakra.div
            ref={ref}
            pos="relative"
            borderRadius={smoothBorder ? 6 : 0}
            backgroundColor="black"
            as="button"
            w={BUTTON_WIDTH}
            sx={{ aspectRatio: `${BUTTON_ASPECT_RATIO}` }}
            overflow="hidden"
            onClick={onClick}>
            {children}
        </chakra.div>
    );
});

export const StyledText = forwardRef<React.PropsWithChildren, 'h1'>(({ children }, ref) => (
    <Text
        ref={ref}
        as="h1"
        initial="init"
        pos="absolute"
        left="8"
        bottom={0}
        color="fontColors.secondary"
        zIndex="docked"
        variant="h1"
    >{children}</Text>
));

const ThumbnailCardUI = forwardRef<ThumbnailCardUIProps, 'button'>((props, ref) => {
    const { listItem: { onClick, ...rest }, smoothBorder = false, motionText } = props;

    return (
        <StyledButton ref={ref} smoothBorder={smoothBorder} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
            {motionText}
        </StyledButton>
    );
});

export default ThumbnailCardUI;
