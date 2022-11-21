import Head from "next/head";

const DOMAIN = "";
const DEFAULT_OG_IMAGE = "";

export default function Seo({
  title = "Picasso - AI NFT Art with User Emotions",
  description = "Picasso is a platform where AI converts users emotions into pictures and turns them into NFT art.",
  siteName = "Picasso",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta key="og_image:alt" property="og:image:alt" content={title} />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />
      <link rel="canonical" href={canonical ?? DOMAIN} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
