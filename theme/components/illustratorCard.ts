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
            flexDirection: 'row-reverse',
            width: 'full',
            maxWidth: '800px',
            margin: '0 auto',
        },
        cardImageContainer: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 15,
            aspectRatio: '0.8',
            width: '30%',
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
            fontSize: '4xl',
            fontWeight: 'medium',
            letterSpacing: '1px',
            margin: '0 0 var(--chakra-space-5) 0',
        },
        cardDescription: {
            fontSize: 'xl',
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
