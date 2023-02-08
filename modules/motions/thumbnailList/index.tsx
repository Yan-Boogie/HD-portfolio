import { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import ThumbnailButton, { CARD_HEIGHT_PIXEL } from './components/thumbnailCard';
import ThumbnailRow from './components/thumbnailRow';
import type { Thumbnail } from './types';

export interface ThumbnailListProps {};

const mockData: Thumbnail = {
    idx: '1',
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
    text: 'Work',
    onClick: () => console.log('clicked'),
};

const MOBILE_MARGIN = 24;

const DesktopList = (props: ThumbnailListProps) => {
    const [data, setData] = useState<([Thumbnail, Thumbnail, Thumbnail] | null)[]>([]);

    if (data.length === 0) {
        setData(Array.from(Array(100)).map(_ => null));
    }

    const isItemLoaded = (index: number) => index < data.length && data[index] !== null;
    
    const loadMoreItems = (startIndex: number, stopIndex: number) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const newData = [...data];

                for (let idx = startIndex; idx < stopIndex; idx++) {
                    newData[idx] = [mockData, mockData, mockData];
                }

                setData(newData);

                resolve();
            }, 2000);
        });
    };

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={data.length}
            loadMoreItems={loadMoreItems}
        >
            {({ onItemsRendered, ref }) => (
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            height={height}
                            width={width}
                            itemCount={data.length}
                            itemSize={CARD_HEIGHT_PIXEL}
                            itemData={data}
                            onItemsRendered={onItemsRendered}
                            ref={ref}>
                            {({ style, index, data }) => (
                                <ThumbnailRow windowRow={{ style, index, data }} />
                            )}
                        </List>
                    )}
                </AutoSizer>
            )}
        </InfiniteLoader>
    );
};

const MobileList = (props: ThumbnailListProps) => {
    const [data, setData] = useState<(Thumbnail | null)[]>([]);

    if (data.length === 0) setData(Array.from(Array(100)).map(_ => null));

    const isItemLoaded = (index: number) => index < data.length && data[index] !== null;

    const loadMoreItems = (startIndex: number, stopIndex: number) => {
        console.log('load more!!\n')

        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const newData = [...data];

                for (let idx = startIndex; idx < stopIndex; idx++) {
                    newData[idx] = mockData;
                }

                setData(newData);

                resolve();
            }, 2000);
        });
    };

    return (
        <AutoSizer>
            {({ height, width }) => (
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={data.length}
                    loadMoreItems={loadMoreItems}
                >
                    {({ onItemsRendered, ref }) => (
                         <List
                            height={height}
                            width={width}
                            itemCount={data.length}
                            itemSize={CARD_HEIGHT_PIXEL + MOBILE_MARGIN}
                            itemData={data}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                        >
                            {({ style, index, data }) => (
                                <ThumbnailButton windowItem={{ data, index, style }} />
                            )}
                        </List>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
};

const ThumbnailList = (props: ThumbnailListProps) => {
    const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

    if (isLargerThanMd) return (
        <DesktopList {...props} />
    );
    
    return (
        <MobileList {...props} />
    )
}

export default ThumbnailList;
