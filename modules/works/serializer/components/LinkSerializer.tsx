import type { PortableTextMarkComponentProps } from '@portabletext/react';

const LinkSerializer = (props: PortableTextMarkComponentProps<any>) => {
    const { value, children } = props;

    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''}>
          {children}
        </a>
      );
};

export default LinkSerializer;
