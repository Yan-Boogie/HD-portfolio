import { Center, Image, chakra } from '@chakra-ui/react';
import { SiGmail, SiInstagram, SiLinkedin, SiFacebook, SiVimeo, SiBehance } from 'react-icons/si';
import type { IconType } from 'react-icons';

import Text from '@/common/components/text';
import Page from '@/common/components/page';
import type { About, SocialMedia } from '@/modules/sanityServer/interfaces';

export interface AboutModuleProps {
    about: About;
}

export default function AboutModule({ about }: AboutModuleProps) {
    const socialMedias: { Icon: IconType; label: SocialMedia }[] = [{
        Icon: SiGmail,
        label: about.gmail,
    }, {
        Icon: SiInstagram,
        label: about.instagram,
    }, {
        Icon: SiLinkedin,
        label: about.linkedIn,
    }, {
        Icon: SiFacebook,
        label: about.facebook,
    }, {
        Icon: SiVimeo,
        label: about.vimeo,
    }, {
        Icon: SiBehance,
        label: about.behance,
    }];

    return (
        <Page layoutStyle="scroll">
            <chakra.div h="calc(100vh - 272px)" w="80%" margin="0 auto" display="flex" flexDirection={['column', 'row']} alignItems="center">
                <Image w={[48, 60, 72]} src={about.avatar} alt="Avatar" marginRight={[0, 16]} marginBottom={[16, 0]} />
                <chakra.div display="flex" flexDirection="column">
                    <Text wordBreak="break-word" variant="h1" as="h1" marginTop={0}>{about.title}</Text>
                    <Text fontFamily="sans-serif" wordBreak="break-word" variant="h3" as="h3" marginBottom={8}>{about.description}</Text>
                    {socialMedias.map(({ Icon, label }) => (
                        <chakra.div key={label} display="flex" flexDirection={['column', 'row']} alignItems={['flex-start', 'center']} marginBottom={3}>
                            <Icon size={20} />
                            <Text fontFamily="sans-serif" wordBreak="break-word" marginLeft={[0, 4]} marginTop={[4, 0]}>{label}</Text>
                        </chakra.div>
                    ))}
                </chakra.div>
            </chakra.div>
        </Page>
    )
}
