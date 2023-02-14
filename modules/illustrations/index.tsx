import { useRouter } from 'next/router';
import Page from '@/common/components/page';
import IllustratorCard from '@/common/components/illustratorCard';
import type { IllustrationItem } from './types';
import type { IIllustration } from '@/modules/sanityServer/interfaces';

export interface IllustrationModuleProps {
    illustrations: IIllustration[];
}

export default function IllustrationModule(props: IllustrationModuleProps) {
    const { illustrations } = props;
    const router = useRouter();

    const illustrationList: IllustrationItem[] = illustrations.map((illustration) => ({
        idx: illustration.id,
        src: illustration.cover,
        alt: '',
        title: illustration.title,
        description: illustration.description || '',
        onClick: () => router.push(`/works/${illustration.id}`),
    }));

    return (
        <Page layoutStyle="scroll" title="Illustration">
            {illustrationList.map((el) => (
                <IllustratorCard
                    key={el.idx}
                    src={el.src}
                    alt={el.alt}
                    title={el.title}
                    description={el.description}
                    onClick={el.onClick} />
            ))}
        </Page>
    )
}
