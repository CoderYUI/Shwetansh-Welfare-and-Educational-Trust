import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  keywords,
  image,
  schema
}) => {
  // Get the current path for dynamic SEO
  const location = useLocation();
  const currentPath = location.pathname;

  // Set default values with SWET branding
  const siteTitle = 'Shwetansh Welfare and Educational Trust (SWET)';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const defaultDescription = 'SWET (Shwetansh Welfare and Educational Trust) is a government-registered organization dedicated to education, welfare, and social initiatives. Join us to make a real impact through youth empowerment programs across India.';
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = 'SWET, Shwetansh Welfare, Educational Trust, NGO, Social Impact, Education, Youth Empowerment, Welfare Programs, Volunteering';
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  
  const siteUrl = 'https://www.shwetanshwelfare.org';
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}${currentPath === '/' ? '' : currentPath}`;
  
  const defaultImage = `${siteUrl}/swet_og_image.jpg`;
  const metaImage = image || defaultImage;

  // Create dynamic schema based on page content
  const createDynamicSchema = () => {
    if (schema) return schema;

    // Default schema
    let defaultSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": canonical,
      "name": fullTitle,
      "description": metaDescription,
      "publisher": {
        "@type": "Organization",
        "name": "Shwetansh Welfare and Educational Trust",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/swet_logo.jpg`
        }
      }
    };

    // Return schema as string
    return JSON.stringify(defaultSchema);
  };

  useEffect(() => {
    // Update document title with SWET branding
    document.title = fullTitle;
    
    // Update meta description
    updateMetaTag('description', metaDescription);
    
    // Update keywords
    updateMetaTag('keywords', metaKeywords);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Update OG tags
    updateMetaProperty('og:title', fullTitle);
    updateMetaProperty('og:description', metaDescription);
    updateMetaProperty('og:url', canonical);
    updateMetaProperty('og:image', metaImage);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:site_name', 'SWET - Shwetansh Welfare and Educational Trust');
    
    // Update Twitter tags
    updateMetaProperty('twitter:card', 'summary_large_image');
    updateMetaProperty('twitter:title', fullTitle);
    updateMetaProperty('twitter:description', metaDescription);
    updateMetaProperty('twitter:image', metaImage);
    
    // Add dynamic schema if not exists
    const dynamicSchema = createDynamicSchema();
    let schemaScript = document.getElementById('dynamic-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.innerHTML = dynamicSchema;

    function updateMetaTag(name, content) {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    }

    function updateMetaProperty(property, content) {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    }
  }, [fullTitle, metaDescription, canonical, metaKeywords, metaImage]);

  // This component doesn't render anything
  return null;
};

export default SEOHead;
