import About from "./components/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies";
import { techData } from "@/lib/data";

export const revalidate = 30;

export default function Home() {
  return (
    <div className="flex flex-col gap-y-14">
      <About />
      <Projects />
      <Technologies techData={techData} />
      <Blog />
      <Contact />
    </div>
  );
}
