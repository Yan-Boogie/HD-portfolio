import { useRouter } from 'next/router'
import { Divider, DividerProps, useMediaQuery } from '@chakra-ui/react';

import Page from '@/common/components/page';
import Text, { TextProps } from '@/common/components/text';
import { useGlobalLoadingEmitter } from '@/modules/globalLoading';
import type { IMotion } from '@/modules/sanityServer/interfaces';
import ThumbnailList from './thumbnailList';
import ThumbnailCarousel from './thumbnailCarousel';
import type { SlideItem } from './thumbnailCarousel/types';
import type { ListItem } from './thumbnailList/types';

export interface MotionModuleProps {
    motions: IMotion[];
}

const StyledText = (props: TextProps) => (
    <Text textAlign="center" variant="h1" fontSize={['3xl', '4xl', '8xl']} margin={["var(--chakra-space-36) 0 0 0", "var(--chakra-space-24) 0 0 0", "var(--chakra-space-12) 0 0 0"]} as="h1">{props.children}</Text>
);

const StyledDivider = (props: DividerProps) => (
    <Divider
        margin={{
            lg: '0 auto 10rem auto',
            md: '0 auto 8rem auto',
            base: '0 auto 4rem auto',
        }}
        width="48%"
        borderWidth={2}
        borderRadius={3}
        {...props} />
);

export default function MotionModule(props: MotionModuleProps) {
    const { motions } = props;
    const [isLargerThanSm] = useMediaQuery('(min-width: 480px)');
    const router = useRouter();
    const emitLoading = useGlobalLoadingEmitter();

    const [slideItems, listItems]: [SlideItem[], ListItem[]] =
        motions.reduce((bundle, el) => {
            if (!isLargerThanSm) {
                bundle[1].push({
                    idx: el.id,
                    previewSrc: el.video.previewSrc,
                    previewAlt: '',
                    url: el.video.movieUrl,
                    text: el.title,
                    onClick: () => {
                        emitLoading('exist');
                        router.push(`/works/${el.id}`);
                    },
                });

                return bundle;
            }

            if (el.section === 'carousel') {
                bundle[0].push({
                    idx: el.id,
                    previewSrc: el.video.previewSrc,
                    previewAlt: '',
                    url: el.video.movieUrl,
                    label: el.title,
                    onClick: () => {
                        emitLoading('exist');            
                        router.push(`/works/${el.id}`);
                    },
                });
            } else {
                bundle[1].push({
                    idx: el.id,
                    previewSrc: el.video.previewSrc,
                    previewAlt: '',
                    url: el.video.movieUrl,
                    text: el.title,
                    onClick: () => {
                        emitLoading('exist');
                        router.push(`/works/${el.id}`);
                    },
                });
            };

            return bundle;
        }, [[], []] as [SlideItem[], ListItem[]]);

    return (
        <Page layoutStyle="scroll" title="Motion">
            {isLargerThanSm && (
                <>
                    <ThumbnailCarousel slideItems={slideItems} />
                    <StyledText>More Motions</StyledText>
                    <StyledDivider />
                </>
            )}
            <ThumbnailList listItems={listItems} />
        </Page>
    );
}
