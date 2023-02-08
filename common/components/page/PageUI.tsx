import {
    forwardRef,
    chakra,
} from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface PageUIProps {};

const PageUI = forwardRef<PageUIProps, 'div'>((props, ref) => {
    const { ...rest } = props;

    const styles = useProvidedMultipartStyles({ name: 'page' });

    return (
        <chakra.div __css={styles} ref={ref} {...rest} />
    );
});

export default PageUI;