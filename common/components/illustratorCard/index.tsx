import { useRef, useImperativeHandle, useEffect, useState } from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { Card, CardBody, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

import type { MotionVariants } from '@/common/utils/typings';
import { StylesProvider } from '@/common/hooks/useProvidedMultipartStyles';
import { CardImage, CardImageProps } from './components/cardImage';
import CardButton from './components/cardButton/';
import Text from '../text';

export interface IllustratorCardProps extends CardImageProps {
    title: string;
    description: string;
};

type MotionVariantTypes = 'viewed' | 'unviewed';

const cardVariants: MotionVariants<MotionVariantTypes> = {
    unviewed: { opacity: 0, y: -8 },
    viewed: { opacity: 1, y: 0 },
};

const MotionCard = motion(Card);

const IllustratorCard = forwardRef<IllustratorCardProps, 'div'>((props, ref) => {
    const { title, description, src, alt, onClick } = props;
    const styles = useMultiStyleConfig('IllustratorCard');
    const cardRef = useRef(null);
    const [cardVariant, setCardVariant] = useState<MotionVariantTypes>('unviewed');
    const isCardInView = useInView(cardRef, { once: true });

    useImperativeHandle(ref, () => cardRef.current);

    useEffect(() => {
        if (isCardInView) setCardVariant('viewed');
    }, [isCardInView]);

    return (
        <StylesProvider.Provider value={styles}>
            <MotionCard animate={cardVariant} variants={cardVariants} ref={cardRef} __css={styles.card}>
                <CardImage src={src} alt={alt} onClick={onClick} />
                <CardBody sx={styles.cardBody}>
                    <Text as="h3" variant="h3" sx={styles.cardTitle}>{title}</Text>
                    <Text sx={styles.cardDescription}>{description}</Text>
                    <CardButton onClick={onClick}>
                        <AiOutlineSwapRight style={{ marginRight: '4px' }} stroke="var(--chakra-colors-fontColors-primary)" />
                        View Work
                    </CardButton>
                </CardBody>
            </MotionCard>
        </StylesProvider.Provider>
    );
});

export default IllustratorCard;
