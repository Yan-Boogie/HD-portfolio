import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { sanityClient } from './createClient';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (src: SanityImageSource) => {
    console.log('env-->\n', process.env.SANITY_KEY, process.env.SANITY_DATASET);

    return builder.image(src);
};
