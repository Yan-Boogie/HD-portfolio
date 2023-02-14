import type { GetStaticPaths, GetStaticProps } from 'next'; 
import WorksModule from '@/modules/works';
import { sanityClient } from '@/modules/sanityServer/createClient';
import type { IWork } from '@/modules/sanityServer/interfaces'; 

interface WorksProps {
    work: IWork;
}

export default function Works(props: WorksProps) {
    const { work } = props;

    return (
        <WorksModule work={work} />
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const works: Pick<IWork, 'id'>[] = await sanityClient.fetch(`
        *[_type == "work"] { "id": _id }
    `);

    const paths = works.map((work) => ({
        params: { wid: work.id },
    }));

    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    const work: IWork = await sanityClient.fetch(`
        *[_type == "work" && _id == "${params?.wid}"] {
            "id": _id,
            "video": Video,
            overview,
            title,
            workType,
            description,
            cover
        }
    `).then((data) => ({
        ...data[0],
        video: (data[0].video && {
            ...data[0].video,
            previewSrc: data[0].video?.preview?.asset?._ref || '',
            movieUrl: data[0].video?.videoSource || '',
        }) || null,
        cover: data[0].cover?.asset._ref || '',
    }));

    return { props: { work } };
}
