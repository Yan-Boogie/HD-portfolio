import Link from 'next/link';
import { Center, useMediaQuery } from '@chakra-ui/react';

import Page from '@/common/components/page';
import ShowreelWallpaperButton from '@/common/components/buttons/showreelWallpaperButton';
import ShowreelButtonMobile from './showreelButtonMobile';

export default function HomeModule() {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  const renderChildren = () => isLargerThanMd ? (
    <Center>
        <Link href="/showreel">
            <ShowreelWallpaperButton src="/butt-animation.gif" alt="Main Page Wallpaper" />
        </Link>
    </Center>
  ) : (
    <ShowreelButtonMobile />
  )

  return (
    <Page layoutStyle="fullScreen">
        {renderChildren()}
    </Page>
  );
};
