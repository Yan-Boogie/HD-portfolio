import Head from 'next/head';
import type { GetStaticProps } from 'next'; 

import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';
import MotionsModule from '@/modules/motions';
import { sanityClient } from '@/modules/sanityServer/createClient';
import type { IMotion } from '@/modules/sanityServer/interfaces';

interface MotionsProps {
    motions: IMotion[];
};

export default function Motions({ motions }: MotionsProps) {
    return (
        <div>
            <Head>
                <title>Hua-Design - Motions</title>
            </Head>
            <MotionsModule motions={motions} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const motions: IMotion[] = await sanityClient.fetch(`
        *[_type == "work" && workType == "motion"] {
            "id": _id,
            "video": Video,
            title,
            section
        }
    `).then((data) => data.map((d: any) => ({
        ...d,
        video: {
            ...d.video,
            previewSrc: d.video?.preview?.asset?._ref ? urlFor(d.video?.preview?.asset?._ref).url() : null,
            movieUrl: d.video?.videoSource || null, 
        },
    })));

    return { props: { motions } };
};
