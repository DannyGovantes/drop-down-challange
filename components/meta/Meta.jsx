import Head from "next/head";

export function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${description}`} />
    </Head>
  );
}
