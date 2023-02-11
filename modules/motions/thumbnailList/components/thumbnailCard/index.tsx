import { forwardRef, chakra, Center } from '@chakra-ui/react';
import VideoPlayer from '@/common/components/videoPlayer';
import Text from '@/common/components/text';

import type { ListItem } from '../../types';

export interface ThumbnailCardProps {
    listItem: ListItem;
};

const BUTTON_WIDTH = '100%';
const BUTTON_ASPECT_RATIO = 0.8;

const StyledButton = (props: React.PropsWithChildren<{
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}>) => {
    const { onClick, children } = props;

    return (
        <chakra.div
            backgroundColor="black"
            as="button"
            w={BUTTON_WIDTH}
            sx={{ aspectRatio: `${BUTTON_ASPECT_RATIO}` }}
            overflow="hidden"
            onClick={onClick}>
            {children}
        </chakra.div>
    );
};

const ThumbnailCard = forwardRef<ThumbnailCardProps, 'button'>((props) => {
    const { listItem: { onClick, text, ...rest } } = props;

    return (
        <StyledButton onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
        </StyledButton>
    );
});

export default ThumbnailCard;
