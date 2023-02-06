import Page from '@/common/components/page';
import ThumbnailList from './thumbnailList';

export interface MotionModuleProps {

}

export default function MotionModule(props: MotionModuleProps) {
    return (
        <Page>
            <ThumbnailList />
        </Page>
    );
}
