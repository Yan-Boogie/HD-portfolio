import ShowreelModule from '@/modules/showreel';
import { sanityClient } from '@/modules/sanityServer/createClient';
import { IShowreel } from '@/modules/sanityServer/interfaces';
import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';

interface ShowreelProps {
    showreel: IShowreel
};

export default function Showreel({ showreel }: ShowreelProps) {
    return (
        <ShowreelModule showreel={showreel} />
    );
}

export async function getStaticProps() {
    const showreel: IShowreel = await sanityClient.fetch(`
        *[_type == "showreel"] {
            _id,
            videoSource,
            "imgSource": preview.asset._ref
        }
    `).then((data) => ({
        id: data[0]._id,
        previewSrc: urlFor(data[0].imgSource).url(),
        movieUrl: data[0].videoSource,
    }));

    return {
        props: {
            showreel,
        }
    }
}
