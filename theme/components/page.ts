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
            backgroundColor: 'var(--chakra-colors-brand-primary)',
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
            marginTop: {
                md: 28,
                base: 16,
            },
        },
        header: {
            position: 'fixed',
            zIndex: 'var(--chakra-zIndices-docked)',
            top: 0,
            width: 'full',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: {
                md: 28,
                base: 16,
            },
            justifyContent: 'space-between',
            padding: {
                md: '0 var(--chakra-space-20)',
                base: '0 var(--chakra-space-6)',
            },
            backgroundColor: 'brand.primary',
        },
        footer: {
            width: 'full',
            height: {
                base: 20,
                md: 40,
            },
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
        },
        title: {
            position: 'absolute',
            right: {
                lg: '65%',
                base: '50%',
            },
            transform: {
                lg: 'translate(0%, 0%)',
                base: 'translate(50%, -50%)',
            },
            top: {
                lg: '35%',
                base: '50%',
            },
            fontWeight: 'black',
            fontSize: {
                xl: '9xl',
                lg: '8xl',
                md: '7xl',
                base: '6xl',
            },
            letterSpacing: 'wide',
        },
    }
});

export default PageStyle;