import dynamic from 'next/dynamic';
import { useState, useRef, useImperativeHandle } from 'react';
import { forwardRef } from '@chakra-ui/react';
import type ReactPlayer from 'react-player/vimeo';
import type { VideoPlayerUIProps } from './VideoPlayerUI';

const VideoPlayerUI = dynamic(() => import('./VideoPlayerUI'), {ssr: false});

import VideoContainer from './components/videoContainer/';
import PreviewImage, { PreviewImageProps } from './components/previewImage';
import useThumbnail from './hooks/useThumbnail';

export interface VideoPlayerProps extends Omit<VideoPlayerUIProps, 'playerRef'> {
    thumbnail?: boolean;
    previewSrc: PreviewImageProps['src'];
    previewAlt: PreviewImageProps['alt'];
};

const VideoPlayer = forwardRef<VideoPlayerProps, 'video'>((props, ref) => {
    const { thumbnail = false, children, previewSrc, previewAlt, ...rest } = props;

    const [playing, setPlaying] = useState(false);
    const [ready, setReady] = useState(false);
    
    const playerRef = useRef<ReactPlayer>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => playerRef.current);

    const { Mask, onProgressHandler } = useThumbnail({
        thumbnail,
        containerRef,
        playerRef,
        videoReady: ready,
        setPlaying,
    });

    const onReady = () => setReady(true);

    return (
        <VideoContainer ref={containerRef}>
            <PreviewImage src={previewSrc} alt={previewAlt} />
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
                <Mask>
                    {children}
                </Mask>
            </VideoPlayerUI>
        </VideoContainer>
    );
})

export default VideoPlayer;
