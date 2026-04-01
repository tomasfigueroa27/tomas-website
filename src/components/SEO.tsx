import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  articleSection?: string;
  keywords?: string;
}

const SEO = ({
  title,
  description,
  image = 'https://tomasfigueroa.com/hero-bg.webp',
  url,
  type = 'website',
  publishedTime,
  articleSection,
  keywords,
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
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Tomas Figueroa Real Estate" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      {type === 'article' && <meta property="article:author" content="https://tomasfigueroa.com/about" />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {articleSection && <meta property="article:section" content={articleSection} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@roatanbytomas" />
      <meta name="twitter:creator" content="@roatanbytomas" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
