import Head from 'next/head';

import MenuModule from '@/modules/menu/';

export default function Menu() {
    return (
        <div>
            <Head>
                <title>Hua-Design - Menu</title>
            </Head>
            <MenuModule />
        </div>
    );
}
