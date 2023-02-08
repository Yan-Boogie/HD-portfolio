import { forwardRef, chakra, Center } from '@chakra-ui/react';

import VideoPlayer from '@/common/components/videoPlayer';
import Text from '@/common/components/text';
import type { WindowItem, Thumbnail } from '../../types';

export interface ThumbnailCardProps {
    windowItem: WindowItem;
};

const BUTTON_WIDTH_PIXEL = 460;
const BUTTON_HEIGHT_PIXEL = 320;
export const CARD_WIDTH_PIXEL = BUTTON_WIDTH_PIXEL;
export const CARD_HEIGHT_PIXEL = BUTTON_HEIGHT_PIXEL + 72;

const StyledButton = (props: React.PropsWithChildren<{
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    style: React.CSSProperties;
}>) => {
    const { onClick, style, children } = props;

    return (
        <Center style={style}>
            <chakra.div as="button" w={`${BUTTON_WIDTH_PIXEL}px`} h={`${BUTTON_HEIGHT_PIXEL}px`} borderRadius="8" overflow="hidden" onClick={onClick}>
                {children}
            </chakra.div>
        </Center>
    );
};

const Wrapper = ({ children }: React.PropsWithChildren) => (
    <chakra.div display="flex" flexDirection="column" justifyContent="flex-start">
        {children}
    </chakra.div>
);

const ThumbnailCard = forwardRef<ThumbnailCardProps, 'button'>((props) => {
    const { windowItem: { index, style, data } } = props;

    if (!data[index]) return null;

    const { onClick, text, ...rest } = data[index] as Thumbnail;

    return (
        <Wrapper>
            <StyledButton style={style} onClick={onClick}>
                <VideoPlayer thumbnail {...rest} />
            </StyledButton>
            <Text margin="8px 0 0 4px" variant="h3">{text}</Text>
        </Wrapper>
    );
});

export default ThumbnailCard;
