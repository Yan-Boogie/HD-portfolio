import { Image } from '@chakra-ui/react';
import { getImageDimensions } from '@sanity/asset-utils';

import { urlFor } from '../../../sanityServer/imageUrlBuilder';
import VideoPlayer from '@/common/components/videoPlayer';

export interface VideoSerializerProps {
    value: any;
}

const VideoSerializer = (props: VideoSerializerProps) => {
    const { value } = props;

    if (!value.videoSource) {
        const previewSrc = value.preview.asset._ref;
        
        const { width, height } = getImageDimensions(previewSrc);

        return (
            <Image
                src={urlFor(previewSrc).url()}
                alt=""
                sx={{
                    width: 'full',
                    aspectRatio: `${width / height}`,
                }} />
        );
    }

    return (
        <VideoPlayer url={value.videoSource} previewAlt="" />
    );
};

export default VideoSerializer;
