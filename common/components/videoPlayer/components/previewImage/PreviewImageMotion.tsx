import { motion, Variant } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react';

import PreviewImageUI, { PreviewImageUIProps } from './PreviewImageUI';
import type { MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';
import type { VideoMotionVariantTypes } from '../../types';

type PreviewImageMotionVariants = {
    [_key in VideoMotionVariantTypes]: Variant;
};

const previewImageVariants: PreviewImageMotionVariants = {
    unhovered: { opacity: 1 },
    hovered: { opacity: 0 },
};

type MergedMotionProps = MergeWithMotion<PreviewImageUIProps>;
export interface PreviewImageMotionProps extends MergedMotionProps {};

const MotionPreviewImage: ReactFCWithRef<MergedMotionProps> = motion(PreviewImageUI);

const PreviewImageMotion = forwardRef<PreviewImageMotionProps, 'img'>((props, ref) => {
    return (
        <MotionPreviewImage
            ref={ref}
            variants={previewImageVariants}
            {...props} />
    );
});

export default PreviewImageMotion;
