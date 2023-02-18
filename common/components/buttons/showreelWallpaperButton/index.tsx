import { useMultiStyleConfig, chakra } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import ShowreelWallpaperButtonMotion, { ShowreelWallpaperButtonMotionProps } from './ShowreelWallpaperButtonMotion';
import { Start } from '../../icons';
import Text from '../../text';

export interface ShowreelWallpaperButtonProps extends Pick<ShowreelWallpaperButtonMotionProps, 'src' | 'alt' | 'onClick'> {};

function ShowreelWallpaperButton(props: ShowreelWallpaperButtonProps) {
    const { src, alt, onClick } = props;
    const styles = useMultiStyleConfig('ShowreelWallpaperButton');

    return (
        <StylesProvider.Provider value={styles}>
            <ShowreelWallpaperButtonMotion onClick={onClick} src={src} alt={alt}>
                <chakra.div pos="absolute" top="28%" left="10%" display="flex" flexDirection="column">
                    <Text sx={styles.text} color="iconColors.primary" variant="h1" as="h1">Watch Showreel</Text>
                    <chakra.div sx={styles.iconBlock}>
                        <Start motiontype="full" />
                    </chakra.div>
                </chakra.div>
            </ShowreelWallpaperButtonMotion>
        </StylesProvider.Provider>
    );
}

export default ShowreelWallpaperButton;
