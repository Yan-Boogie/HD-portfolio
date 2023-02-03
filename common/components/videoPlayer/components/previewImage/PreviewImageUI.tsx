import { Image, ImageProps, forwardRef } from '@chakra-ui/react';

export type PreviewImageUIProps = ImageProps;

const PreviewImageUI = forwardRef<ImageProps, 'img'>((props, ref) => {
    const { alt, ...rest } = props;

    return (
        <Image
            pos="absolute"
            width="full"
            margin="0 auto"
            top="50%"
            transform="translateY(-50%)"
            alt={alt}
            ref={ref}
            {...rest} />
    )
});

export default PreviewImageUI;
