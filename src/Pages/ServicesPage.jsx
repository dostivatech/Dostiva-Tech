import Services from "../Components/Services";
import Schema from "../Components/Schema";
import SEO from "../Components/SEO";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Services by Dostiva Tech",
  "provider": {
    "@type": "Organization",
    "name": "Dostiva Tech ",
    "url": "https://tech.dostiva.site/Services",
  },
  "areaServed": "IN",
  "serviceType": [
    "Web Development",
    "Software Development",
    "API Development",
    "IT Consulting",
    "Maintenance & Support"
  ],
  "description": "Professional IT services including web development, custom software, APIs, and IT consulting."
};

export default function ServicesPage() {
  return (
    <>
      <Schema schema={servicesSchema} />
      <SEO
  title="Services | Dostiva Tech"
  description="Web development, software solutions, API & backend, and IT support services by Dostiva Tech."
/>
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden pointer-events-none z-0 bg-slate-50">
      <div className="absolute -top-24 -left-24 w-80 h-80 pointer-events-none bg-brand-orange/10 rounded-full blur-3xl" />
             <div className="absolute pointer-events-none z-0 -bottom-24 -right-24 w-80 h-80  bg-blue-500/10 rounded-full blur-3xl" />
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-slate-600 mb-10">
        We build scalable, modern software solutions for businesses.
      </p>
      <Services />
    </div></>
  );
}
