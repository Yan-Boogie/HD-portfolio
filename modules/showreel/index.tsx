import { Center } from '@chakra-ui/react';

import Page from '@/common/components/page';
import VideoPlayer from '@/common/components/videoPlayer';

const mockLink = 'https://vimeo.com/714795278';

export default function ShowreelModule() {
    return (
        <Page>
            <Center>
                <VideoPlayer previewSrc="/mock/mock-1.jpg" previewAlt="Mock Image" url={mockLink} />
            </Center>
        </Page>
    );
}
