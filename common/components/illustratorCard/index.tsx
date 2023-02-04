import { Card, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import IconButton from '../buttons/iconButton';
import { CardImage, CardImageProps } from './components/cardImage';
import { CarouselRight } from '../icons';
import Text from '../text';

export interface IllustratorCardProps extends CardImageProps {};

const IllustratorCard = forwardRef<IllustratorCardProps, 'div'>((props, ref) => {
    const { src, alt, onClick } = props;
    const styles = useMultiStyleConfig('IllustratorCard');

    return (
        <StylesProvider.Provider value={styles}>
            <Card __css={styles.card}>
                <CardImage src={src} alt={alt} onClick={onClick} />
                <Text as="h1" sx={styles.cardTitle}>Title</Text>
                <IconButton pos="absolute" right={3} bottom="0" aria-label="example" onClick={onClick}>
                    <CarouselRight motiontype="full" />
                </IconButton>
            </Card>
        </StylesProvider.Provider>
    );
});

export default IllustratorCard;
