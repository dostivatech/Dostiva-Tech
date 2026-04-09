import { useEffect } from "react";

export default function Schema() {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dostiva Tech",
      "url": "https://tech.dostiva.site",
      "logo": "https://tech.dostiva.site/logo.png",
      "image": "https://tech.dostiva.site/logo.png",
      "sameAs": [
        // add these later when you have them
        // "https://www.facebook.com/yourpage",
        // "https://www.instagram.com/yourpage",
        // "https://www.linkedin.com/company/yourpage"
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    script.id = "dostiva-schema";

    // Remove old one if exists
    const old = document.getElementById("dostiva-schema");
    if (old) old.remove();

    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("dostiva-schema");
      if (s) s.remove();
    };
  }, []);

  return null;
}
