import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { sanityClient } from './createClient';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (src: SanityImageSource) => builder.image(src);
