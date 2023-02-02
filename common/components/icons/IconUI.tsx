import { Icon, IconProps, useStyleConfig, forwardRef } from '@chakra-ui/react';

export interface IconUIProps extends IconProps {
    variant?: string;
};

const IconUI = forwardRef<IconUIProps, 'div'>((props, ref) => {
    const { variant = '', children, ...rest } = props;

    const styles = useStyleConfig('IconUI', { variant });

    return (
        <Icon __css={styles} variant={variant} ref={ref} {...rest}>
            {children}
        </Icon>
    );
})

IconUI.displayName = 'IconUI';

export default IconUI;
