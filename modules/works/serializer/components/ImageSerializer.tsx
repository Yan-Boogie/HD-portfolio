import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';
import { Image, Box } from '@chakra-ui/react';

export interface ImageSerializerProps {
    value: any;
}

const ImageSerializer = ({ value }: ImageSerializerProps) => {
    const { width, height } = getImageDimensions(value);

    return (
        <Box margin="0 0 var(--chakra-space-6) 0" width="full" display="flex" justifyContent="center" alignItems="center">
            <Image
                src={urlFor(value.asset._ref).url()}
                alt={value.alt || ''}
                sx={{
                    width: '100vw',
                    maxWidth: 'none',
                    flexShrink: 0,
                    aspectRatio: `${width / height}`,
                }} />
        </Box>
    );
}

export default ImageSerializer;
