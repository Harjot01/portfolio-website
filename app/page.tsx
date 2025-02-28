import About from "./components/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-14">
      <About />
      <Projects />
      <WorkExperience />
      <Blog />
      <Contact />
    </div>
  );
}
