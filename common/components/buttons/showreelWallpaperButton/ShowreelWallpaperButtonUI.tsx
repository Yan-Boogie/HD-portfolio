import { Box, forwardRef, Image, ImageProps } from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface ShowreelWallpaperButtonUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    children: React.ReactNode;
    onClick: () => void;
};

const ShowreelWallpaperButtonUI = forwardRef<ShowreelWallpaperButtonUIProps, 'button'>((props, ref) => {
    const { src, alt, children, onClick } = props;

    const styles = useProvidedMultipartStyles({ name: 'showReelWallpaperButton' });

    return (
        <Box
            ref={ref}
            as="button"
            __css={styles}
            onClick={onClick}
        >
            <Image h="100vh" objectFit="cover" sx={{ aspectRatio: `${16 / 9}` }} src={src} alt={alt} />
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
