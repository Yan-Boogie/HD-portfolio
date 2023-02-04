import { createClient } from 'next-sanity';

export const sanityClient = createClient({
    projectId: process.env.SANITY_KEY,
    dataset: process.env.SANITY_DATASET,
    useCdn: false,
});
