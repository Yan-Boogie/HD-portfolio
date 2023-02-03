import { Image, ImageProps, forwardRef } from '@chakra-ui/react';

export interface PreviewImageUIProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
};

const PreviewImageUI = forwardRef<PreviewImageUIProps, 'img'>((props, ref) => {
    const { alt, src } = props;

    return (
        <Image
            pos="absolute"
            height="full"
            margin="0 auto"
            left="50%"
            transform="translateX(-50%)"
            zIndex="docked"
            alt={alt}
            ref={ref}
            src={src} />
    )
});

export default PreviewImageUI;
