import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first post</title>
      </Head>
      <h1>My Post on Next JS!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
}
