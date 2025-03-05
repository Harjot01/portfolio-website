import { sanityClient } from "./sanity";

export async function getAbout() {
  const query = '*[_type == "about"][0]';
  const aboutData = await sanityClient.fetch(query);
  return aboutData || null;
}
