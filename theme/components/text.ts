import { defineStyleConfig } from '@chakra-ui/react'

const TextStyle = defineStyleConfig({
    variants: {
        h1: {
            fontSize: { base: '3xl', sm: '4xl', md: '6xl' },
            fontWeight: 'bold',
            margin: 'var(--chakra-space-8) 0',
            color: 'fontColors.primary',
        },
        h2: {
            fontSize: { base: '2xl', sm: '3xl', md: '4xl' },
            fontWeight: 'bold',
            color: 'fontColors.secondary',
        },
        h3: {
            fontSize: { base: 'xl', sm: '2xl', md: '3xl' },
            fontWeight: 'bold',
            color: 'fontColors.primary',
        },
        paragraph: {
            fontSize: 'lg',
            fontWeight: 'normal',
            color: 'gray.600',
        },
    },
    defaultProps: {
        variant: 'paragraph',
    },
});

export default TextStyle;
