import { Image, chakra, Divider } from '@chakra-ui/react';
import { getImageDimensions } from '@sanity/asset-utils';

import { urlFor } from '../sanityServer/imageUrlBuilder';
import Page from '@/common/components/page';
import Text from '@/common/components/text';
import VideoPlayer from '@/common/components/videoPlayer';
import type { IWork } from '@/modules/sanityServer/interfaces'; 

import Serializer from './serializer';

export interface WorksModuleProps {
    work: IWork;
};

const StyledWrapper = ({ children }: React.PropsWithChildren) => (
    <chakra.div
        margin="0 auto"
        width="full"
        padding={6}
        maxWidth="5xl">
        {children}
    </chakra.div>
);

const ContentBlock = ({ children }: React.PropsWithChildren) => (
    <chakra.div
        width="full"
        margin="var(--chakra-space-20) 0">
        {children}
    </chakra.div>
);

const StyledDivider = () => (
    <Divider
        marginBottom={{
            md: 32,
            base: 16,
        }}
        orientation="horizontal"
        borderWidth={2}
        borderRadius={2} />
);

export default function WorksModule(props: WorksModuleProps) {
    const { work } = props;

    const renderCover = () => {
        if (!work.cover) return null;

        const { cover } = work;
        const { width, height } = getImageDimensions(cover);

        return (
            <Image
                src={urlFor(cover).url()}
                alt=""
                sx={{
                    width: '100vw',
                    aspectRatio: width / height,
                }} />
            )
        };

    const renderVideo = () => {
        if (!work.video) return null;

        const { video: { previewSrc, movieUrl } } = work;

        if (!movieUrl) {
            const { width, height } = getImageDimensions(previewSrc);

            return (
                <Image
                    src={urlFor(previewSrc).url()}
                    alt=""
                    sx={{
                        width: 'full',
                        aspectRatio: `${width / height}`,
                    }} />
            )
        }

        return (
            <VideoPlayer url={movieUrl} previewAlt="" />
        )
    };

    return (
        <Page>
            <StyledWrapper>
                {work.workType === 'illustration' ? renderCover() : renderVideo()}
                <ContentBlock>
                    <Text variant="h1">{work.title}</Text>
                    <StyledDivider />
                    <Serializer value={work.overview} />
                </ContentBlock>
            </StyledWrapper>
        </Page>
    );
}
