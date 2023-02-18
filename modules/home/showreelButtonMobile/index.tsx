import Link from 'next/link';
import { chakra, Image } from '@chakra-ui/react';

import Text from '@/common/components/text';
import IconButton from '@/common/components/buttons/iconButton/';
import { Start } from '@/common/components/icons';

export interface ShowreelButtonMobileProps {
    onClick: () => void;
}

function ShowreelButtonMobile(props: ShowreelButtonMobileProps) {
    return (
        <chakra.div display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="full" h="100vh">
            <Image w={96} objectFit="cover" src="/lemon-motion.gif" alt="Showreel Button" />
            <Text variant="h1" as="h1" textAlign="center" lineHeight="1.2" marginTop={-16} letterSpacing={3} width="sm" fontSize="6xl">Watch Showreel</Text>
            <Link href="/showreel">
                <IconButton
                    onClick={props.onClick}
                    aria-label="showreel button"
                    initial="inactive"
                    animate="active"
                    transition={{ delayChildren: 2 }}>
                    <Start motiontype="full" />
                </IconButton>
            </Link>
        </chakra.div>
    );
}

export default ShowreelButtonMobile;
