import { sanityClient } from "./sanity";
import { ProjectsInterface } from "./interface";

export async function getSingleProject(
  slug: string,
): Promise<ProjectsInterface | null> {
  const query = `*[_type == "projects" && slug.current == $slug][0]`;
  const project = await sanityClient.fetch(query, { slug });

  return project || null;
}
export async function getProjects() {
  const query = `*[_type == "projects"]`;
  const projects = await sanityClient.fetch(query);
  return projects;
}
