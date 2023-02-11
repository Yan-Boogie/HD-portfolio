import { chakra, Center } from '@chakra-ui/react';

import Page from '@/common/components/page';
import VideoPlayer from '@/common/components/videoPlayer';
import { IShowreel } from '../sanityServer/interfaces';

export interface ShowreelModuleProps {
    showreel: IShowreel;
}

const StyledWrapper = ({ children }: React.PropsWithChildren) => (
    <Center
        padding={{
            md: '0 var(--chakra-space-20)',
            base: '0 var(--chakra-space-4)',
        }}
        marginTop={{
            md: 0,
            base: 8,
        }}>
        {children}
    </Center>
);

export default function ShowreelModule(props: ShowreelModuleProps) {
    const { showreel } = props;

    return (
        <Page>
            <StyledWrapper>
                <VideoPlayer previewSrc={showreel.previewSrc} previewAlt="Showreel" url={showreel.movieUrl} />
            </StyledWrapper>
        </Page>
    );
}
