import { PropsWithChildren, useState } from 'react';
import { useMediaQuery, chakra } from '@chakra-ui/react';

import ThumbnailButton from './components/thumbnailCard';
import ThumbnailColumn from './components/thumbnailColumn';
import type { ListItem } from './types';

export interface ThumbnailListProps {
    listItems: ListItem[];
};

const MOBILE_MARGIN = 24;

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

    console.log('columnListBundle-->\n', columnListBundle);

    return (
        <StyledDesktopWrapper>
            <ThumbnailColumn columnIdx={0} columnItems={columnListBundle[0]} />
            <ThumbnailColumn columnIdx={1} columnItems={columnListBundle[1]} />
        </StyledDesktopWrapper>
    );
};

// const MobileList = (props: ThumbnailListProps) => {
//     const [data, setData] = useState<(Thumbnail | null)[]>([]);

//     if (data.length === 0) setData(Array.from(Array(100)).map(_ => null));

//     const isItemLoaded = (index: number) => index < data.length && data[index] !== null;

//     const loadMoreItems = (startIndex: number, stopIndex: number) => {
//         console.log('load more!!\n')

//         return new Promise<void>((resolve) => {
//             setTimeout(() => {
//                 const newData = [...data];

//                 for (let idx = startIndex; idx < stopIndex; idx++) {
//                     newData[idx] = mockData;
//                 }

//                 setData(newData);

//                 resolve();
//             }, 2000);
//         });
//     };

//     return (
//         <AutoSizer>
//             {({ height, width }) => (
//                 <InfiniteLoader
//                     isItemLoaded={isItemLoaded}
//                     itemCount={data.length}
//                     loadMoreItems={loadMoreItems}
//                 >
//                     {({ onItemsRendered, ref }) => (
//                          <List
//                             height={height}
//                             width={width}
//                             itemCount={data.length}
//                             itemSize={CARD_HEIGHT_PIXEL + MOBILE_MARGIN}
//                             itemData={data}
//                             onItemsRendered={onItemsRendered}
//                             ref={ref}
//                         >
//                             {({ style, index, data }) => (
//                                 <ThumbnailButton windowItem={{ data, index, style }} />
//                             )}
//                         </List>
//                     )}
//                 </InfiniteLoader>
//             )}
//         </AutoSizer>
//     );
// };

const ThumbnailList = (props: ThumbnailListProps) => {
    const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

    if (isLargerThanMd) return (
        <DesktopList {...props} />
    );

    return (
        <DesktopList {...props} />
    );
    
    // return (
    //     <MobileList {...props} />
    // )
}

export default ThumbnailList;
