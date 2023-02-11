import type { PropsWithChildren } from 'react';
import { VStack } from '@chakra-ui/react';
import ThumbnailCard from '../thumbnailCard';
import type { ListItem } from '../../types';

export interface ThumbnailColumnProps {
    columnIdx: number;
    columnItems: ListItem[];
};

const StyledWrapper = ({ children, columnIdx }: PropsWithChildren<{columnIdx: number}>) => (
    <VStack
        spacing={0}
        width="50%"
        marginTop={columnIdx === 1 ? '12%' : ''}>
        {children}
    </VStack>
);

const ThumbnailRow = (props: ThumbnailColumnProps) => {
    const { columnItems, columnIdx } = props;

    return (
        <StyledWrapper columnIdx={columnIdx}>
            {columnItems.map((el) => (
                <ThumbnailCard key={el.idx} listItem={el} />
            ))}
        </StyledWrapper>
    );
};

export default ThumbnailRow;
