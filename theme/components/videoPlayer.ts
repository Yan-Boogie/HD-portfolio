import { defineStyleConfig } from '@chakra-ui/react';

const CONTROL_PANEL_SIZE = '190px';

const VideoContainerStyle = defineStyleConfig({
    baseStyle: {
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        width: 'full',
        aspectRatio: '1.8',
        margin: 'auto auto',
    },
    variants: {
        thumbnail: {
            position: 'absolute',
            width: `calc(100% + ${CONTROL_PANEL_SIZE})`,
            height: `calc(100% + ${CONTROL_PANEL_SIZE})`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    }
});

export default VideoContainerStyle;
