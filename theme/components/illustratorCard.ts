import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers([
    'card',
    'iconButton',
    'cardImageContainer',
    'hiddenCardImage',
    'cardImage',
    'cardTitle',
]);

const IllustratorCardStyle = helpers.defineMultiStyleConfig({
    baseStyle: {
        card: {
            position: 'relative',
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: {
                sm: 'row-reverse',
                base: 'column',
            },
            alignItems: 'center',
            width: 'full',
            maxWidth: '800px',
            margin: '0 auto 8rem auto',
        },
        cardImageContainer: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 15,
            aspectRatio: '0.8',
            width: {
                sm: '30%',
                base: '80%',
            },
            marginBottom: {
                sm: 0,
                base: 8,
            },
        },
        hiddenCardImage: {
            width: 'full',
            visibility: 'hidden',
        },
        cardImage: {
            width: 'full',
            height: 'full',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        cardTitle: {
            color: 'fontColors.primary',
            fontSize: {
                sm: '4xl',
                base: '2xl',
            },
            fontWeight: 'medium',
            letterSpacing: '1px',
            margin: '0 0 var(--chakra-space-5) 0',
        },
        cardDescription: {
            fontSize: {
                sm: 'xl',
                base: 'lg',
            },
            margin: '0 0 var(--chakra-space-10) 0',
            letterSpacing: '1px',
        },
        cardBody: {
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
});

export default IllustratorCardStyle;
