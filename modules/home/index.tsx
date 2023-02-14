import Link from 'next/link';
import { Center } from '@chakra-ui/react';

import Page from '@/common/components/page';
import ShowreelWallpaperButton from '@/common/components/buttons/showreelWallpaperButton';

export default function HomeModule() {
  return (
    <Page layoutStyle="fullScreen">
        <Center>
            <Link href="/showreel">
                <ShowreelWallpaperButton src="/butt-animation.gif" alt="Main Page Wallpaper" />
            </Link>
        </Center>
    </Page>
  );
};
