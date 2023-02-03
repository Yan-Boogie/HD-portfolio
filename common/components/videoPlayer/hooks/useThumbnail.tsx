import { useEffect } from 'react';
import { chakra } from '@chakra-ui/react';
import type ReactPlayer from 'react-player/vimeo';

export interface UseThumbnailArgs {
    thumbnail?: boolean;
    containerRef: React.RefObject<HTMLDivElement>;
    playerRef: React.RefObject<ReactPlayer>;
    videoReady: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledMask = ({ children }: React.PropsWithChildren) => (
    <chakra.div
        zIndex="base"
        pos="absolute"
        w="full"
        h="full"
        right="0"
        top="0">
        {children}
    </chakra.div>
);

export default function useThumbnail(args: UseThumbnailArgs) {
    const { thumbnail, containerRef, videoReady, setPlaying, playerRef } = args;

    useEffect(() => {
        if (!thumbnail || !containerRef.current || !videoReady) return () => {};

        const maskNode = containerRef.current;

        const onMouseEnterHandler = () => {
            setPlaying(true);
        };

        maskNode.addEventListener('mouseenter', onMouseEnterHandler, true);

        return () => {
            maskNode.removeEventListener('mouseenter', onMouseEnterHandler, true);
        }
    }, [containerRef, setPlaying, thumbnail, videoReady]);

    useEffect(() => {
        if (!thumbnail || !containerRef.current || !videoReady) return () => {};

        const maskNode = containerRef.current;

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
    }, [containerRef, playerRef, setPlaying, thumbnail, videoReady]);

    const onProgressHandler = ({ playedSeconds }: any) => {
        if (!thumbnail || !playerRef.current || !videoReady) return;

        const playerNode = playerRef.current;

        if (playedSeconds >= 8) playerNode.seekTo(0);
    };

    const Mask = ({ children }: React.PropsWithChildren): JSX.Element => thumbnail ? (
        <StyledMask>
            {children}
        </StyledMask>
    ) : (
        <>{children}</>
    )

    return {
        Mask,
        onProgressHandler,
    };
}
