import { forwardRef, chakra, Center } from '@chakra-ui/react';

import VideoPlayer from '@/common/components/videoPlayer';
import type { WindowItem } from '../../types';

export interface ThumbnailButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    windowItem: WindowItem;
};

export const buttonWidthPixel = 380;
export const buttonHeightPixel = 220;

const StyledButton = (props: React.PropsWithChildren<{
    onClick: ThumbnailButtonProps['onClick'];
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
    const { onClick, windowItem } = props;

    const { index, style, data } = windowItem;

    const loading = data[index] === null;

    if (loading) return null;

    const { ...rest } = data[index];

    console.log('rest-->\n', rest);

    return (
        <StyledButton style={style} onClick={onClick}>
            <VideoPlayer thumbnail {...rest} />
        </StyledButton>
    );
});

export default ThumbnailButton;
