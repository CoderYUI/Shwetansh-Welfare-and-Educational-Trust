import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ title, description, canonicalUrl }) => {
  const siteTitle = 'Shwetansh Welfare and Educational Trust';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Join Shwetansh Welfare and Educational Trust to make a real impact through education, welfare, and social initiatives. Volunteer opportunities available across India.';
  const metaDescription = description || defaultDescription;
  const siteUrl = 'https://shwetanshwelfaretrust.vercel.app/';
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};

export default SEOHelmet;
