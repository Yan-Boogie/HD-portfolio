import Head from 'next/head';

import HomeModule from '@/modules/home/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hua-Design - Home</title>
        <meta name="description" content="Hua-Design Home Page" />
      </Head>
      <HomeModule />
    </div>
  );
}
