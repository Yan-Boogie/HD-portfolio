import { forwardRef, chakra } from '@chakra-ui/react';
import VideoPlayer from '@/common/components/videoPlayer';
import Text from '@/common/components/text';

import type { ListItem } from '../../types';

export interface ThumbnailCardUIProps {
    listItem: ListItem;
    smoothBorder?: boolean;
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

const ThumbnailCardUI = forwardRef<ThumbnailCardUIProps, 'button'>((props, ref) => {
    const { listItem: { onClick, text, ...rest }, smoothBorder = false } = props;

    return (
        <StyledButton ref={ref} smoothBorder={smoothBorder} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
        </StyledButton>
    );
});

export default ThumbnailCardUI;
