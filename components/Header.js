import Link from 'next/link';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx global>{`
      body {
        background: #fed7c0;
        font: 11px menlo;
        color: #000;
      }
    `}</style>
  </div>
);
