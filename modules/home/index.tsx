import { useRouter } from 'next/router';
import { Center, useMediaQuery } from '@chakra-ui/react';

import { useGlobalLoadingEmitter } from '@/modules/globalLoading';
import Page from '@/common/components/page';
import ShowreelWallpaperButton from '@/common/components/buttons/showreelWallpaperButton';
import ShowreelButtonMobile from './showreelButtonMobile';

export default function HomeModule() {
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');
  const emitLoading = useGlobalLoadingEmitter();
  const router = useRouter();

  const routerHandler = () => {
    emitLoading('exist');
    router.push('/showreel');
  };

  const renderChildren = () => isLargerThanMd ? (
    <Center>
        <ShowreelWallpaperButton onClick={routerHandler} src="/butt-animation.gif" alt="Main Page Wallpaper" />
    </Center>
  ) : (
    <ShowreelButtonMobile onClick={routerHandler} />
  )

  return (
    <Page layoutStyle="fullScreen">
        {renderChildren()}
    </Page>
  );
};
