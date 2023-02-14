import dynamic from 'next/dynamic';
import { useState, useRef, useImperativeHandle } from 'react';
import { forwardRef, Image } from '@chakra-ui/react';
import type ReactPlayer from 'react-player/vimeo';
import type { VideoPlayerUIProps } from './VideoPlayerUI';

const VideoPlayerUI = dynamic(() => import('./VideoPlayerUI'), {ssr: false});

import VideoContainer from './components/videoContainer/';
import PreviewImage, { PreviewImageProps } from './components/previewImage';
import useThumbnail from './hooks/useThumbnail';

interface VideoPlayerProps extends Omit<VideoPlayerUIProps, 'playerRef'> {
    thumbnail?: boolean;
    previewSrc: PreviewImageProps['src'];
    previewAlt: PreviewImageProps['alt'];
}

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
            {thumbnail ? <PreviewImage src={previewSrc} alt={previewAlt} /> : null}
            <VideoPlayerUI
                playing={playing}
                playerRef={playerRef}
                muted={thumbnail ? true : false}
                controls={thumbnail ? false : true}
                progressInterval={5000}
                onProgress={onProgressHandler}
                containerVariant={thumbnail ? 'thumbnail' : ''}
                onReady={onReady}
                {...rest}>
                <Mask>
                    {children}
                </Mask>
            </VideoPlayerUI>
        </VideoContainer>
    );
})

export interface WrapperProps extends Omit<VideoPlayerProps, 'url'> {
    url?: string;
    thumbnail?: boolean;
    previewSrc: string;
    previewAlt: string;
}

const Wrapper = forwardRef<WrapperProps, 'video' | 'img'>((props, ref) => {
    const { url, ...rest } = props;

    if (!url) {
        return (
            <Image
                src={props.previewSrc}
                alt={props.previewAlt}
                w="full"
                h="full"
                objectFit="cover" />
        );
    }

    return (
        <VideoPlayer url={url} {...rest} />
    )
});

export default Wrapper;
