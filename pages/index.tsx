import Head from 'next/head';

import HomeModule from '@/modules/home/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hua-Design - Home</title>
      </Head>
      <HomeModule />
    </div>
  );
}
