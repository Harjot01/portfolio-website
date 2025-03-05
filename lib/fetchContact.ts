import { ContactInterface } from "./interface";
import { sanityClient } from "./sanity";

export async function getContact(): Promise<ContactInterface | null> {
  const query = '*[_type == "contact"][0]';
  const contactData = await sanityClient.fetch(query);
  return contactData || null;
}
