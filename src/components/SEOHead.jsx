import { useEffect } from 'react';

const SEOHead = ({ title, description, canonicalUrl }) => {
  const siteTitle = 'Shwetansh Welfare and Educational Trust (SWET)';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Join Shwetansh Welfare and Educational Trust (SWET) to make a real impact through education, welfare, and social initiatives. Volunteer opportunities available across India. SWET is also known as Shwetansh Welfare and Educational Trust.';
  const metaDescription = description || defaultDescription;
  const siteUrl = 'https://www.shwetanshwelfare.org/';
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescription);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Update OG tags
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', metaDescription);
    updateMetaTag('og:url', canonical);
    
    function updateMetaTag(property, content) {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    }
  }, [fullTitle, metaDescription, canonical]);

  // This component doesn't render anything
  return null;
};

export default SEOHead;
