import { sanityClient } from "./sanity";
import { ProjectsInterface } from "./interface";

export async function getSingleBlog(
  slug: string,
): Promise<ProjectsInterface | null> {
  const query = `*[_type == "blogs" && slug.current == $slug][0]`;
  const blog = await sanityClient.fetch(query, { slug });

  return blog || null;
}
export async function getBlogs() {
  const query = `*[_type == "blogs"]`;
  const blogs = await sanityClient.fetch(query);
  return blogs;
}
