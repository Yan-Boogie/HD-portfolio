import { HStack } from '@chakra-ui/react';
import ThumbnailButton from '../thumbnailCard';
import type { WindowRow, Thumbnail } from '../../types';

export interface ThumbnailRowProps {
    windowRow: WindowRow;
};

const ThumbnailRow = (props: ThumbnailRowProps) => {
    const { windowRow: { index, style, data } } = props;

    if (!data[index]) return null;

    const thumbnailBundle = data[index] as [Thumbnail, Thumbnail, Thumbnail];

    return (
        <HStack style={style} justifyContent="space-between">
            {thumbnailBundle.map((el, idx) => (
                <ThumbnailButton key={el.idx} windowItem={{ style: {}, index: idx, data: thumbnailBundle }} />
            ))}
        </HStack>
    );
};

export default ThumbnailRow;
