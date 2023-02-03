import { useState, RefObject } from 'react';
import type { VimeoPlayerProps } from 'react-player/vimeo';
import ReactPlayer from 'react-player/vimeo';
import type IReactPlayer from 'react-player';
import { useStyleConfig, forwardRef, Center, Spinner } from '@chakra-ui/react';

export interface VideoPlayerUIProps extends VimeoPlayerProps {
    containerVariant?: string;
    children?: React.ReactNode;
    playerRef: RefObject<ReactPlayer>;
};

const StyledSpinner = () => (
    <Spinner
        color="iconColors.primary"
        pos="absolute"
        top="49%"
        left="49%" />
);

const VideoPlayerUI = forwardRef<VideoPlayerUIProps, 'video'>((props, _) => {
    const { playerRef, playing, containerVariant, onReady, children, ...rest } = props;

    const containerStyles = useStyleConfig('VideoContainer', { variant: containerVariant });
    const [ready, setReady] = useState(false);

    const videoReadyHandler = (player: IReactPlayer) => {
        setReady(true);
        
        onReady && onReady(player);
    };

    return (
        <Center
            __css={containerStyles}>
            {children}
            <ReactPlayer
                playing={playing}
                width="100%"
                height="100%"
                ref={playerRef}
                onReady={videoReadyHandler}
                {...rest} />
            {!ready && <StyledSpinner />}
        </Center>
    )
});

export default VideoPlayerUI;
