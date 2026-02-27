import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = "https://drmilindbapat.in";

const SEOHead = ({ title, description, keywords, canonical, ogImage = "/images/logo.png" }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "Dr. Milind Bapat");
    setMeta("robots", "index, follow");

    // OG
    const fullUrl = `${BASE_URL}${canonical}`;
    const fullImage = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:image", fullImage, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Dr. Milind Bapat - Urologist in Pune", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", fullImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullUrl);
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEOHead;
