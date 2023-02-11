import { defineStyleConfig } from '@chakra-ui/react'

const MenuIconButtonStyle = defineStyleConfig({
    baseStyle: {
        position: 'relative',
        fontSize: {
            base: '5xl',
            sm: '7xl',
            md: '9xl',
        },
        fontWeight: 'black',
        color: 'fontColors.primary',
        overflow: 'hidden',
    },
});

export default MenuIconButtonStyle;
