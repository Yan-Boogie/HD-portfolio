import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const helpers = createMultiStyleConfigHelpers([
    'page',
    'transition',
    'layout',
    'header',
    'footer',
    'footerBG',
    'footerLink',
    'bgContainer',
]);

const PageStyle = helpers.defineMultiStyleConfig({
    baseStyle: {
        page: {
            width: 'full',
            backgroundImage: 'url("/img-noise.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
        },
        transition: {
            width: '100vw',
            height: '100vh',
            background: `linear-gradient(
                to right,
                var(--chakra-colors-transitions-50) 5%,
                var(--chakra-colors-transitions-100) 10%,
                var(--chakra-colors-transitions-200) 20%,
                var(--chakra-colors-transitions-300) 50%,
                var(--chakra-colors-transitions-200) 80%,
                var(--chakra-colors-transitions-100) 90%,
                var(--chakra-colors-transitions-50) 100%
            )`,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: 'fixed',
        },
        layout: {
            width: 'full',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },
        body: {
            flexGrow: 1,
        },
        header: {
            position: 'sticky',
            top: 0,
            width: 'full',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: {
                md: 'var(--chakra-space-8) var(--chakra-space-20)',
                base: 'var(--chakra-space-4) var(--chakra-space-4)',
            },
            backgroundColor: 'brand.primary',
        },
        footer: {
            position: 'relative',
            width: 'full',
            height: 40,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            padding: 'var(--chakra-space-8) var(--chakra-space-20)',
        },
        footerLink: {
            zIndex: 'docked',
        },
        footerBG: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            zIndex: 'base',
            opacity: 0.5,
        },
        bgContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            zIndex: 'base',
        }
    }
});

export default PageStyle;