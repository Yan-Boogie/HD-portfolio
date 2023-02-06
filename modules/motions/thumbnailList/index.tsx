import { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import ThumbnailButton, { buttonHeightPixel } from './components/thumbnailButton';
import type { Thumbnail } from './types';

export interface ThumbnailListProps {};

const mockData: Thumbnail = {
    url: 'https://vimeo.com/714795278',
    previewAlt: 'mock',
    previewSrc: '/mock/mock-1.jpg',
};

const MOBILE_MARGIN = 24;

const DesktopList = (props: ThumbnailListProps) => {
    const [data, setData] = useState<Thumbnail[][]>([]);

    if (data.length === 0) {
        setData(Array.from(Array(100)).map(_ => Array.from(Array(3)).map(_ => null)));
    }

    
};

const MobileList = (props: ThumbnailListProps) => {
    const [data, setData] = useState<Thumbnail[]>([]);
    const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

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
                            className="List"
                            height={height}
                            width={width}
                            itemCount={data.length}
                            itemSize={buttonHeightPixel + MOBILE_MARGIN}
                            itemData={data}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                        >
                            {({ style, index, data }) => (
                                <ThumbnailButton onClick={() => console.log('click!')} windowItem={{ data, index, style }} />
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

    // if (isLargerThanMd) return (
    //     <DesktopList {...props} />
    // );
    
    return (
        <MobileList {...props} />
    )
}

export default ThumbnailList;
