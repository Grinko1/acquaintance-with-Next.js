import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../componets/MainLayout';


export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Next greeting</title>
    
      </Head>
      <h1>Next.js</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
    </MainLayout>
  );
}
