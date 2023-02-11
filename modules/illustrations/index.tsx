import Page from '@/common/components/page';
import IllustratorCard from '@/common/components/illustratorCard';
import type { IllustrationItem } from './types';

const mockItems: IllustrationItem[] = [{
    idx: '0',
    src: '/mock/mock-1.jpg',
    alt: 'mock',
    title: 'Title Title Title',
    description: 'Description Description Description',
}, {
    idx: '1',
    src: '/mock/mock-1.jpg',
    alt: 'mock',
    title: 'Title Title Title',
    description: 'Description Description Description',
}, {
    idx: '2',
    src: '/mock/mock-1.jpg',
    alt: 'mock',
    title: 'Title Title Title',
    description: 'Description Description Description',
}, {
    idx: '3',
    src: '/mock/mock-1.jpg',
    alt: 'mock',
    title: 'Title Title Title',
    description: 'Description Description Description',
}, {
    idx: '4',
    src: '/mock/mock-1.jpg',
    alt: 'mock',
    title: 'Title Title Title',
    description: 'Description Description Description',
}, {
    idx: '5',
    src: '/mock/mock-1.jpg',
    alt: 'mock',
    title: 'Title Title Title',
    description: 'Description Description Description',
}];

export interface IllustrationModuleProps {

}

export default function IllustrationModule(props: IllustrationModuleProps) {
    return (
        <Page title="Illustration">
            {mockItems.map((el) => (
                <IllustratorCard
                    key={el.idx}
                    src={el.src}
                    alt={el.alt}
                    title={el.title}
                    description={el.description}
                    onClick={() => console.log('clicked')} />
            ))}
        </Page>
    )
}
