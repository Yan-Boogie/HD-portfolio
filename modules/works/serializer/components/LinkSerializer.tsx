import Link from 'next/link';
import { chakra } from '@chakra-ui/react';
import type { PortableTextMarkComponentProps } from '@portabletext/react';

const ChakraLink = chakra(Link);

const LinkSerializer = (props: PortableTextMarkComponentProps<any>) => {
    const { value, children } = props;

    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <ChakraLink
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : ''}
          sx={{
            color: 'var(--chakra-colors-fontColors-secondary)',
            borderBottom: 'solid 1px var(--chakra-colors-fontColors-secondary)'
          }}>
          {children}
        </ChakraLink>
      );
};

export default LinkSerializer;
