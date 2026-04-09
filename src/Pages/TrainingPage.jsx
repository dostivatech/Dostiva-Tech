import Courses from "../Components/Courses";
import Schema from "../Components/Schema";
import SEO from "../Components/SEO";
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Training Programs by Dostiva Tech",
  "itemListElement": [
    {
      "@type": "Course",
      "name": "Python Training",
      "description": "Practical Python training for beginners and professionals."
    },
    {
      "@type": "Course",
      "name": "React & Full Stack Training",
      "description": "Job-ready full stack development training with React and backend technologies."
    },
    {
      "@type": "Course",
      "name": "Java Training",
      "description": "Comprehensive Java training for software development careers."
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "Dostiva Tech",
    "url": "https://tech.dostiva.site/Courses"
  }
};

export default function TrainingPage() {
  return (
    <>
      <Schema schema={coursesSchema} />
      <SEO
  title="Training | Dostiva Tech"
  description="Professional IT training in web development, software, and modern technologies."
/>
      <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden pointer-events-none z-0 bg-slate-50">
        <div className="absolute -top-24 -left-24 w-80 h-80 pointer-events-none z-0 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 pointer-events-none bg-blue-500/10 rounded-full blur-3xl" />        
      <h1 className="text-4xl font-bold mb-6">Training Programs</h1>
      <p className="text-slate-600 mb-10">
        Practical, job-ready training designed by industry professionals.
      </p>
      <Courses />
    </div></>
  );
}
