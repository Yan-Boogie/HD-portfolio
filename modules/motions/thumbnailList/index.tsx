import { PropsWithChildren } from 'react';
import { useMediaQuery, chakra, VStack } from '@chakra-ui/react';

import ThumbnailCard from './components/thumbnailCard';
import ThumbnailColumn from './components/thumbnailColumn';
import type { ListItem } from './types';

export interface ThumbnailListProps {
    listItems: ListItem[];
};

const StyledDesktopWrapper = ({ children }: PropsWithChildren) => (
    <chakra.div
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        width="65%"
        margin="0 auto">
        {children}
    </chakra.div>
)

const DesktopList = (props: ThumbnailListProps) => {
    const { listItems } = props;
    const columnListBundle: [ListItem[], ListItem[]] = listItems.reduce<[ListItem[], ListItem[]]>((bundle, item, idx) => {
        if (idx % 2 === 0) {
            bundle[0].push(item);
        } else {
            bundle[1].push(item);
        }

        return bundle;
    }, [[], []]);

    return (
        <StyledDesktopWrapper>
            <ThumbnailColumn columnIdx={0} columnItems={columnListBundle[0]} />
            <ThumbnailColumn columnIdx={1} columnItems={columnListBundle[1]} />
        </StyledDesktopWrapper>
    );
};

const StyledMobileWrapper = ({ children }: PropsWithChildren) => (
    <VStack spacing={8} width="84%" margin="0 auto">
        {children}
    </VStack>
);

const MobileList = (props: ThumbnailListProps) => {
    const { listItems } = props;

    return (
        <StyledMobileWrapper>
            {listItems.map((el) => (
                <ThumbnailCard smoothBorder key={el.idx} listItem={el} />
            ))}
        </StyledMobileWrapper>
    )
};

const ThumbnailList = (props: ThumbnailListProps) => {
    const [isLargerThanSm] = useMediaQuery('(min-width: 480px)');

    const renderList = () => isLargerThanSm ? <DesktopList {...props} /> : <MobileList {...props} />;

    return (
        <chakra.div marginBottom={{
            lg: '18rem',
            md: '12rem',
            base: '4rem',
        }}>
            {renderList()}
        </chakra.div>
    );
}

export default ThumbnailList;
