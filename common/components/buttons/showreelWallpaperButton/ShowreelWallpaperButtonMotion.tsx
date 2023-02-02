import { motion } from 'framer-motion';
import { forwardRef } from '@chakra-ui/react'; 
import ShowreelWallpaperButtonUI, { ShowreelWallpaperButtonUIProps, MaskUI } from './ShowreelWallpaperButtonUI';
import type { MotionVariants, MergeWithMotion, ReactFCWithRef } from '@/common/utils/typings';

type MotionVariantTypes = 'hovered' | 'init';

const motionVariantTypes: {
    [K in MotionVariantTypes]: K
} = {
    hovered: 'hovered',
    init: 'init',
};

const maskVariants: MotionVariants<MotionVariantTypes> = {
    init: {
        opacity: 0,
    },
    hovered: {
        opacity: 0.5,
    },
};

type MergedMotionProps = MergeWithMotion<ShowreelWallpaperButtonUIProps>;
const MotionShowreelWallpaperButton: ReactFCWithRef<MergedMotionProps> = motion(ShowreelWallpaperButtonUI);
const MotionMask = motion(MaskUI);

export interface ShowreelWallpaperButtonMotionProps extends MergedMotionProps {}

const ShowreelWallpaperButtonMotion = forwardRef<ShowreelWallpaperButtonMotionProps, 'button'>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <MotionShowreelWallpaperButton
            ref={ref}
            initial={motionVariantTypes.init}
            whileHover={motionVariantTypes.hovered}
            {...rest}>
            <MotionMask variants={maskVariants} />
            {children}
        </MotionShowreelWallpaperButton>
    );
});

export default ShowreelWallpaperButtonMotion;
