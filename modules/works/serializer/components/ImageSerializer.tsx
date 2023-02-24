import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';
import { Image, Box } from '@chakra-ui/react';

export interface ImageSerializerProps {
    value: any;
}

const ImageSerializer = ({ value }: ImageSerializerProps) => {
    if (!value || !value.asset || !value.asset._ref) return null;

    return (
        <Box margin="0 0 var(--chakra-space-6) 0" width="full" display="flex" justifyContent="center" alignItems="center">
            <Image
                src={urlFor(value.asset._ref).url()}
                alt={value.alt || ''}
                sx={{
                    width: '100vw',
                    maxWidth: 'none',
                    flexShrink: 0,
                }} />
        </Box>
    );
}

export default ImageSerializer;
