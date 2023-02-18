import { useRouter } from 'next/router';
import { Center, CenterProps } from '@chakra-ui/react';

import IconButton, { IconButtonProps } from '@/common/components/buttons/iconButton';
import { Close } from '@/common/components/icons';
import Page from '@/common/components/page';
import MenuItemButton from '@/common/components/buttons/menuItemButton';
import { useGlobalLoadingEmitter } from '@/modules/globalLoading';

const menuItems = [{
    url: '/showreel',
    label: 'Showreel',
}, {
    url: '/motions',
    label: 'Motion',
}, {
    url: '/illustrations',
    label: 'Illustration',
}, {
    url: '/about',
    label: 'About',
}];

const StyledCenter = (props: CenterProps) => (
    <Center
        pos="relative"
        w="100vw"
        h="100vh"
        display="flex"
        flexDirection="column"
        {...props} />
);

const StyledIconButton = (props: IconButtonProps) => (
    <IconButton pos="absolute" right={{ md: 20, base: 4 }} top={{ md: 8, base: 4 }} {...props} />
);

export default function MenuModule() {
    const router = useRouter();
    const emitLoading = useGlobalLoadingEmitter();

    return (
        <Page layoutStyle="none">
            <StyledCenter>
                <StyledIconButton aria-label="close" onClick={() => router.back()}>
                    <Close fontSize={['6xl', '6xl']} motiontype="full" />
                </StyledIconButton>
                {menuItems.map((item, idx) => (
                    <MenuItemButton key={idx} onClick={() => { emitLoading('exist'); router.push(item.url); }}>
                        {item.label}
                    </MenuItemButton>
                ))}
            </StyledCenter>
        </Page>
    );
}