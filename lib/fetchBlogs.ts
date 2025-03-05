import { sanityClient } from "./sanity";
import { BlogsInterface } from "./interface";

export async function getSingleBlog(
  slug: string,
): Promise<BlogsInterface | null> {
  const query = `*[_type == "blogs" && slug.current == $slug][0]`;
  const blogData = await sanityClient.fetch(query, { slug });

  return blogData || null;
}
export async function getBlogs() {
  const query = `*[_type == "blogs"]`;
  const blogsData = await sanityClient.fetch(query);
  return blogsData;
}
