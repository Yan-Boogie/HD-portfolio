import { Box, forwardRef, Image, ImageProps } from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface ShowreelWallpaperButtonUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    children: React.ReactNode;
};

/**
 * @todo
 * - Refactor the Image style with css 'aspectRatio'
 */
const ShowreelWallpaperButtonUI = forwardRef<ShowreelWallpaperButtonUIProps, 'button'>((props, ref) => {
    const { src, alt, children } = props;

    const styles = useProvidedMultipartStyles({ name: 'showReelWallpaperButton' });

    return (
        <Box
            ref={ref}
            as="button"
            __css={styles}
        >
            {/* This styling way is really bad!! */}
            <Image maxHeight="calc(100vh - 312px)" src={src} alt={alt} />
            {children}
        </Box>
    );
})

export const MaskUI = forwardRef<{}, 'div'>((_, ref) => {
    const styles = useProvidedMultipartStyles({ name: 'mask' });

    return (
        <Box ref={ref} __css={styles} />
    );
});

export default ShowreelWallpaperButtonUI;
