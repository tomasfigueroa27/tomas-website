import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title,
  description,
  image = 'https://tomasfigueroa.com/hero-bg.webp',
  url,
}: SEOProps) => {
  const fullTitle = title.includes('Tomas Figueroa')
    ? title
    : `${title} | Tomas Figueroa – Roatan Real Estate`;

  const canonicalUrl = url
    ? `https://tomasfigueroa.com${url}`
    : 'https://tomasfigueroa.com';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
