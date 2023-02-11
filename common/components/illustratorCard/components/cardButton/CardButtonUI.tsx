import { chakra, Button, ButtonProps, forwardRef } from '@chakra-ui/react';

export interface CardButtonUIProps extends ButtonProps {};

const CardButtonUI = forwardRef<CardButtonUIProps, 'button'>((props, ref) => {
    const { ...rest } = props;

    return (
        <Button
            ref={ref}
            variant="unstyled"
            __css={{
                display: 'flex',
                alignItems: 'center',
                width: '8rem',
                position: 'relative',
                overflow: 'hidden',
                fontSize: 'xl',
                borderBottom: 'solid 1px var(--chakra-colors-fontColors-primary)'
            }}
            {...rest} />
    );
});

export const BorderLine = forwardRef<{}, 'div'>((props, ref) => {
    return (
        <chakra.div backgroundColor="fontColors.primary" ref={ref} pos="absolute" h="2px" w="full" bottom="-1px" left={0} />
    );
});

export default CardButtonUI;
