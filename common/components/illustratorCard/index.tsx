import { AiOutlineSwapRight } from 'react-icons/ai'
import { Card, CardBody, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';

import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import { CardImage, CardImageProps } from './components/cardImage';
import CardButton from './components/cardButton/';
import Text from '../text';

export interface IllustratorCardProps extends CardImageProps {
    title: string;
    description: string;
};

const IllustratorCard = forwardRef<IllustratorCardProps, 'div'>((props, ref) => {
    const { title, description, src, alt, onClick } = props;
    const styles = useMultiStyleConfig('IllustratorCard');

    return (
        <StylesProvider.Provider value={styles}>
            <Card ref={ref} __css={styles.card}>
                <CardImage src={src} alt={alt} onClick={onClick} />
                <CardBody sx={styles.cardBody}>
                    <Text as="h3" variant="h3" sx={styles.cardTitle}>{title}</Text>
                    <Text sx={styles.cardDescription}>{description}</Text>
                    <CardButton>
                        <AiOutlineSwapRight style={{ marginRight: '4px' }} stroke="var(--chakra-colors-fontColors-primary)" />
                        View Work
                    </CardButton>
                </CardBody>
            </Card>
        </StylesProvider.Provider>
    );
});

export default IllustratorCard;
