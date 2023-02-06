import { useRouter } from 'next/router';
import Link from 'next/link';
import { Center, CenterProps } from '@chakra-ui/react';

import IconButton, { IconButtonProps } from '@/common/components/buttons/iconButton';
import { Close } from '@/common/components/icons';
import Page from '@/common/components/page';

import MenuItemButton from '@/common/components/buttons/menuItemButton';

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
    <IconButton pos="absolute" right={20} top={8} {...props} />
);

export default function MenuModule() {
    const router = useRouter();

    return (
        <Page withLayout={false}>
            <StyledCenter>
                <StyledIconButton aria-label="close" onClick={() => router.back()}>
                    <Close motiontype="full" />
                </StyledIconButton>
                {menuItems.map((item, idx) => (
                    <Link href={item.url} key={idx}>
                        <MenuItemButton>
                            {item.label}
                        </MenuItemButton>
                    </Link>
                ))}
            </StyledCenter>
        </Page>
    );
}