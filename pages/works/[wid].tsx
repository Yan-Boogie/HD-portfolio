import type { GetStaticPaths, GetStaticProps } from 'next'; 
import WorkModule from '@/modules/works';
import { sanityClient } from '@/modules/sanityServer/createClient';
import type { IWork } from '@/modules/sanityServer/interfaces'; 

interface WorkProps {
    work: IWork;
}

export default function Works(props: WorkProps) {
    const { work } = props;

    console.log('work-->\n', work);

    return (
        <WorkModule />
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
    `);

    return { props: { work } };
}
