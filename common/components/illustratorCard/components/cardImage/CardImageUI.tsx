import { forwardRef, Image, ImageProps, Button, ButtonProps } from '@chakra-ui/react';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';

export interface CardImageUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    onClick: ButtonProps['onClick'];
};

const CardImageUI = forwardRef<CardImageUIProps, 'div'>((props, ref) => {
    const { src, alt, onClick } = props;
    const styles = useProvidedMultipartStyles();

    return (
        <Button variant="unstyled" __css={styles.cardImageContainer} onClick={onClick}>
            <Image objectFit="cover" ref={ref} __css={styles.hiddenCardImage} src={src} alt={alt} />
            <Image objectFit="cover" ref={ref} __css={styles.cardImage} src={src} alt={alt} />
        </Button>
    );
});

export default CardImageUI;
