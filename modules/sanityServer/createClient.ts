import { createClient } from 'next-sanity';

/**
 * @todo
 * Change to .env file (Currently sanity client brokes without fetching the correct env KV)
 */
export const sanityClient = createClient({
    projectId: 'av5zugn5',
    dataset: 'production',
    useCdn: false,
});
