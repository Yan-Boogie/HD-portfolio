import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'showReelWallpaperButton',
    'mask',
    'iconBlock',
    'text',
]);

const ShowreelWallpaperButton = helpers.defineMultiStyleConfig({
    baseStyle: {
        showReelWallpaperButton: {
            position: 'relative',
            width: '100vw',
            backgroundColor: 'gray.900',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        mask: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'full',
            height: 'full',
            zIndex: 'base',
            backgroundColor: 'gray.700',
        },
        iconBlock: {
            zIndex: 'docked',
            width: '60px',
            transform: 'translate(10px, 40px)',
        },
        text: {
            zIndex: 'docked',
            display: { sm: 'none', md: 'inherit' },
            fontSize: '9xl',
            width: 'xl',
            wordBreak: 'break-word',
            textAlign: 'left',
            lineHeight: 1,
            letterSpacing: 4,
        }
    },
});

export default ShowreelWallpaperButton;
