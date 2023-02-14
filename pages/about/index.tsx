import Head from 'next/head';
import type { GetStaticProps } from 'next';

import AboutModule from '@/modules/about/';
import { urlFor } from '@/modules/sanityServer/imageUrlBuilder';
import { sanityClient } from '@/modules/sanityServer/createClient';
import type { About } from '@/modules/sanityServer/interfaces';

interface AboutProps {
    about: About;
}

export default function About({ about }: AboutProps) {
    return (
        <div>
            <Head>
                <title>Hua-Design - About</title>
                <meta name="description" content="Hua-Design About Page" />
            </Head>
            <AboutModule about={about} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const about: About = await sanityClient.fetch(`
        *[_type == "about"]
    `).then((data) => ({
        title: data[0].title,
        description: data[0].description,
        avatar: urlFor(data[0].avatar).url(),
        gmail: data[0].gmail,
        instagram: data[0].instagram,
        linkedIn: data[0].linkedIn,
        facebook: data[0].facebook,
        vimeo: data[0].vimeo,
        behance: data[0].behance,
    }));

    return { props: { about } };
};
