import { Center } from '@chakra-ui/react';

import Page from '@/common/components/page';
import VideoPlayer from '@/common/components/videoPlayer';
import { IShowreel } from '../sanityServer/interfaces';

export interface ShowreelModuleProps {
    showreel: IShowreel
}

export default function ShowreelModule(props: ShowreelModuleProps) {
    const { showreel } = props;

    return (
        <Page>
            <Center>
                <VideoPlayer previewSrc={showreel.previewSrc} previewAlt="Showreel" url={showreel.movieUrl} />
            </Center>
        </Page>
    );
}
