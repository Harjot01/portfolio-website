import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2024-02-25",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: string) {
  return builder.image(source);
}
