import { Image, chakra, forwardRef } from '@chakra-ui/react';

const GlobalLoadingUI = forwardRef<{}, 'div'>((_, ref) => {
    return (
        <chakra.div ref={ref} top="0" left="0" pos="fixed" zIndex="popover" w="100vw" h="100vh" backgroundColor="gray.700">
            <Image src="/loading.gif" alt="loading" w={[60, 96]} pos="absolute" right={-8} bottom={-8} />
        </chakra.div>
    );
});

export default GlobalLoadingUI;
