import { sanityClient } from "./sanity";
import { ProjectsInterface } from "./interface";

export async function getSingleProject(
  slug: string,
): Promise<ProjectsInterface | null> {
  const query = `*[_type == "projects" && slug.current == $slug][0]`;
  const projectData = await sanityClient.fetch(query, { slug });

  return projectData || null;
}
export async function getProjects() {
  const query = `*[_type == "projects"]`;
  const projectsData = await sanityClient.fetch(query);
  return projectsData;
}
