import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';
import { Image } from '@chakra-ui/react';

export interface ImageSerializerProps {
    value: any;
}

const ImageSerializer = ({ value }: ImageSerializerProps) => {
    const { width, height } = getImageDimensions(value);

    console.log('value-->\n', value, width, height);

    return (
        <Image
            src={urlFor(value.asset._ref).url()}
            alt={value.alt || ''}
            sx={{ aspectRatio: width / height }} />
    );
}

export default ImageSerializer;
