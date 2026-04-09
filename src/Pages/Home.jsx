import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Courses from "../Components/Courses";
import WhyChooseUs from "../Components/ChooseUs";
import HowItWorks from "../Components/HowIt";
import Testimonials from "../Components/Testimonials";
import Stats from "../Components/Stats";
import SEO from "../Components/SEO";
import Schema from "../Components/Schema";


const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dostiva Tech",
  "url": "https://www.tech.dostiva.site",
  "logo": "https://www.tech.dostiva.site/logo.png", // change when you upload logo
  "sameAs": [
    "https://www.linkedin.com/company/dostiva",
    "https://www.facebook.com/dostiva",
    "https://www.instagram.com/dostiva"
  ],
  "description": "Dostiva Tech provides IT services, software development, and professional training programs.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9182849769",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English"]
  }
};

export default function Home() {
  return (
    <>
      <Schema schema={orgSchema} />
      <SEO
        title="Dostiva Tech | IT Services & Training"
        description="Build. Learn. Grow. with Dostiva Tech. We provide IT solutions and professional training."
      />
      
      <Hero />
      <Stats />
      <Services />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
    </>
  );
}
