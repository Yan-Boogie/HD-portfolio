import type { GetStaticProps } from 'next';

import IllustrationModule from '@/modules/illustrations';
import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';
import { sanityClient } from '@/modules/sanityServer/createClient';
import type { IIllustration } from '@/modules/sanityServer/interfaces';

interface IllustrationProps {
    illustrations: IIllustration[];
};

export default function Illustrations({ illustrations }: IllustrationProps) {
    return (
        <IllustrationModule illustrations={illustrations} />
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const illustrations: IIllustration[] = await sanityClient.fetch(`
        *[_type == "work" && workType == "illustration"] {
            "id": _id,
            title,
            description,
            "cover": cover.asset._ref
        }
    `).then((data) => data.map((d: any) => ({
        ...d,
        cover: d.cover ? urlFor(d.cover).url() : null,
        description: d.description || '',
    })));

    return { props: { illustrations } };
}
