import dynamic from 'next/dynamic';
import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { forwardRef, chakra } from '@chakra-ui/react';
import type ReactPlayer from 'react-player/vimeo';
import type { VideoPlayerUIProps } from './VideoPlayerUI';

const VideoPlayerUI = dynamic(() => import('./VideoPlayerUI'), {ssr: false});

export interface VideoPlayerProps extends Omit<VideoPlayerUIProps, 'playerRef'> {
    thumbnail?: boolean;
};

/**
 * @todo
 * Refactor thumbnail feature to custom hook file
 */
const VideoPlayer = forwardRef<VideoPlayerProps, 'video'>((props, ref) => {
    const { thumbnail = false, children, ...rest } = props;

    const [playing, setPlaying] = useState(false);
    const [ready, setReady] = useState(false);
    
    const playerRef = useRef<ReactPlayer>(null);
    const previewMaskRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => playerRef.current);

    const onReady = () => setReady(true);

    useEffect(() => {
        if (!thumbnail || !previewMaskRef.current || !ready) return () => {};

        const maskNode = previewMaskRef.current;

        const onMouseEnterHandler = () => {
            setPlaying(true);
        };

        maskNode.addEventListener('mouseenter', onMouseEnterHandler, true);

        return () => {
            maskNode.removeEventListener('mouseenter', onMouseEnterHandler, true);
        }
    });

    useEffect(() => {
        if (!thumbnail || !previewMaskRef.current || !ready) return () => {};

        const maskNode = previewMaskRef.current;

        const onMouseLeaveHandler = () => {
            if (!playerRef.current) return;

            const playerNode = playerRef.current;

            setPlaying(false);

            playerNode.seekTo(0);
        };

        maskNode.addEventListener('mouseleave', onMouseLeaveHandler, true);

        return () => {
            maskNode.removeEventListener('mouseleave', onMouseLeaveHandler, true);
        }
    });

    const onProgressHandler = ({ playedSeconds }: any) => {
        if (!thumbnail || !playerRef.current || !ready) return;

        const playerNode = playerRef.current;

        if (playedSeconds >= 8) playerNode.seekTo(0);
    };

    return (
        <chakra.div
            ref={previewMaskRef}
            pos="relative"
            overflow="hidden"
            w="380px"
            h="220px">
            <VideoPlayerUI
                playing={playing}
                playerRef={playerRef}
                muted={thumbnail ? true : false}
                controls={thumbnail ? false : true}
                progressInterval={5000}
                onProgress={onProgressHandler}
                containerVariant="thumbnail"
                onReady={onReady}
                {...rest}>
                {thumbnail ? (
                    <chakra.div
                        zIndex="base"
                        pos="absolute"
                        w="full"
                        h="full"
                        right="0"
                        top="0">
                        {children}
                    </chakra.div>
                ) : children}
            </VideoPlayerUI>
        </chakra.div>
    );
})

export default VideoPlayer;
