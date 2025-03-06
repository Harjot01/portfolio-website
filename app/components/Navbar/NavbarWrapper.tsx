import { getAbout } from "@/lib/fetchAbout";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const aboutData = await getAbout();
  const [_file, id, extension] = aboutData?.resume.asset._ref.split("-") || [];
  const resumeLink = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;

  return <Navbar resumeLink={resumeLink} />;
}
