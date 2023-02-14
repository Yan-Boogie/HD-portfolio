import Link from 'next/link';
import { chakra, forwardRef, Image } from '@chakra-ui/react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

import useProvidedMultipartStyles from '@/common/hooks/useProvidedMultipartStyles';
import Text from '@/common/components/text';
import IconButton from '@/common/components/buttons/iconButton';
import { Menu } from '@/common/components/icons';

export interface BodyUIProps {
    children: React.ReactNode;
};
export const BodyUI = forwardRef<BodyUIProps, 'div'>((props, ref) => {
    const styles = useProvidedMultipartStyles({ name: 'body' });

    return (
        <chakra.div __css={styles} ref={ref} {...props}>
            {props.children}
        </chakra.div>
    );
})

export const HeaderUI = forwardRef<{}, 'div'>((_, ref) => {
    const styles = useProvidedMultipartStyles({ name: 'header' });

    return (
        <chakra.div __css={styles} ref={ref}>
            <Link href="/">
                <Image src="/hd-design-logo.png" w={{ md: 40, base: 24 }} alt="logo" />
            </Link>
            <Link href="/menu">
                <IconButton aria-label="menu">
                    <Menu motiontype="full" />
                </IconButton>
            </Link>
        </chakra.div>
    );
});

export const FooterUI = forwardRef<{}, 'div'>((_, ref) => {
    const styles = useProvidedMultipartStyles();

    return (
        <chakra.div ref={ref} __css={styles.footer} />
    );
});

export interface LayoutUIProps {
    children: React.ReactNode;
};
export const LayoutUI = forwardRef<LayoutUIProps, 'div'>((props, ref) => {
    const styles = useProvidedMultipartStyles({ name: 'layout' });

    return (
        <chakra.div __css={styles} ref={ref}>
            {props.children}
        </chakra.div>
    );
});

export interface TitleUIProps {
    title: string;
}
export const TitleUI = forwardRef<TitleUIProps, 'div'>((props, ref) => {
    const { title } = props;
    const styles = useProvidedMultipartStyles({ name: 'title' });

    return (
        <chakra.div pos="relative" w="full" h={{ lg: '100vh', md: 'xl', base: 'sm' }}>
            <Text as="h1" variant="h1" sx={styles} ref={ref}>
                {title}
            </Text>
        </chakra.div>
    );
});

export const ScrollDownUI = forwardRef<{}, 'div'>((_, ref) => {
    return (
        <chakra.div ref={ref} pos="fixed" bottom="5%" left="10%" display="flex" flexDirection="column" zIndex="sticky">
            <Text
                fontSize="xl"
                margin="0 0 10px 14px"
                color="fontColors.primary">
                Scroll Down
            </Text>
            <HiOutlineArrowNarrowDown size={40} stroke="var(--chakra-colors-fontColors-primary)" />
        </chakra.div>
    );
});
