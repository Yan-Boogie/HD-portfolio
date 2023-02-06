import { forwardRef, chakra, Center } from '@chakra-ui/react';

import VideoPlayer from '@/common/components/videoPlayer';
import type { WindowItem, Thumbnail } from '../../types';

export interface ThumbnailButtonProps {
    windowItem: WindowItem;
};

export const buttonWidthPixel = 380;
export const buttonHeightPixel = 220;

const StyledButton = (props: React.PropsWithChildren<{
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    style: React.CSSProperties;
}>) => {
    const { onClick, style, children } = props;

    return (
        <Center style={style}>
            <chakra.div as="button" w={`${buttonWidthPixel}px`} h={`${buttonHeightPixel}px`} onClick={onClick}>
                {children}
            </chakra.div>
        </Center>
    );
};

const ThumbnailButton = forwardRef<ThumbnailButtonProps, 'button'>((props) => {
    const { windowItem: { index, style, data } } = props;

    if (!data[index]) return null;

    const { onClick, ...rest } = data[index] as Thumbnail;

    return (
        <StyledButton style={style} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
        </StyledButton>
    );
});

export default ThumbnailButton;
