import Head from 'next/head';

import ShowreelModule from '@/modules/showreel';
import { sanityClient } from '@/modules/sanityServer/createClient';
import { IShowreel } from '@/modules/sanityServer/interfaces';
import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';

interface ShowreelProps {
    showreel: IShowreel
};

export default function Showreel({ showreel }: ShowreelProps) {
    return (
        <div>
            <Head>
                <title>Hua-Design - Showreel</title>
                <meta name="description" content="Hua-Design Showreel" />
            </Head>
            <ShowreelModule showreel={showreel} />
        </div>
    );
}

export async function getStaticProps() {
    const showreel: IShowreel = await sanityClient.fetch(`
        *[_type == "showreel"] {
            _id,
            "video": Video
        }
    `).then((data) => ({
        id: data[0]._id,
        previewSrc: data[0].video.preview?.asset?._ref ? urlFor(data[0].video.preview?.asset?._ref).url() : '',
        movieUrl: data[0].video.videoSource,
    }));

    return {
        props: {
            showreel,
        }
    }
}
