import { forwardRef, chakra, Center } from '@chakra-ui/react';
import VideoPlayer from '@/common/components/videoPlayer';
import Text from '@/common/components/text';

import type { ListItem } from '../../types';

export interface ThumbnailCardProps {
    listItem: ListItem;
    smoothBorder?: boolean;
};

const BUTTON_WIDTH = '100%';
const BUTTON_ASPECT_RATIO = 0.8;

const StyledButton = (props: React.PropsWithChildren<{
    smoothBorder: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}>) => {
    const { onClick, children, smoothBorder } = props;

    return (
        <chakra.div
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
};

const ThumbnailCard = forwardRef<ThumbnailCardProps, 'button'>((props) => {
    const { listItem: { onClick, text, ...rest }, smoothBorder = false } = props;

    return (
        <StyledButton smoothBorder={smoothBorder} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
        </StyledButton>
    );
});

export default ThumbnailCard;
