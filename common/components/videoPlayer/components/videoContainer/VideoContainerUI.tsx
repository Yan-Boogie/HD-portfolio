import { forwardRef, chakra } from '@chakra-ui/react';

export type VideoContainerUIProps = React.PropsWithChildren;

const VideoContainerUI = forwardRef<VideoContainerUIProps, 'div'>(({ children }, ref) => {
    return (
        <chakra.div
            pos="relative"
            overflow="hidden"
            w="full"
            h="full"
            ref={ref}>
            {children}
        </chakra.div>
    );
});

export default VideoContainerUI;
