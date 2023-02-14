import Head from 'next/head';

import MenuModule from '@/modules/menu/';

export default function Menu() {
    return (
        <div>
            <Head>
                <title>Hua-Design - Menu</title>
                <meta name="description" content="Hua-Design Menu Page" />
            </Head>
            <MenuModule />
        </div>
    );
}
