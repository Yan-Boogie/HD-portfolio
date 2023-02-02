import { defineStyleConfig } from '@chakra-ui/react'

const TextStyle = defineStyleConfig({
    variants: {
        h1: {
            fontSize: { sm: '4xl', md: '6xl' },
            fontWeight: 'medium',
            margin: 2,
            color: 'fontColors.primary',
        },
        h2: {
            fontSize: { sm: '2xl', md: '3xl' },
            fontWeight: 'normal',
            color: 'fontColors.secondary',
        },
        paragraph: {
            fontSize: 'md',
            fontWeight: 'light',
            color: 'gray.300',
        },
    },
    defaultProps: {
        variant: 'paragraph',
    },
});

export default TextStyle;
