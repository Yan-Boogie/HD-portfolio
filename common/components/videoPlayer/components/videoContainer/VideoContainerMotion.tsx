import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import VideoContainerUI, { VideoContainerUIProps } from './VideoContainerUI';
import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type MergedMotionProps = MergeWithMotion<VideoContainerUIProps>;
export interface VideoContainerMotionProps extends MergedMotionProps {};

const MotionVideoContainer: ReactFCWithRef<MergedMotionProps> = motion(VideoContainerUI);

const VideoContainerMotion = forwardRef<VideoContainerMotionProps, 'div'>((props, ref) => {
    return (
        <MotionVideoContainer
            ref={ref}
            initial="unhovered"
            whileHover="hovered"
            {...props} />
    );
});

export default VideoContainerMotion;
