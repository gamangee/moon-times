import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | The New York Times</title>
    </Head>
  );
}
