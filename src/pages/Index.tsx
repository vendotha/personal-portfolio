import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import LinkedInPosts from "@/components/Posts";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <LinkedInPosts />
      <Contact />
    </div>
  );
};

export default Index;
