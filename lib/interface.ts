import { PortableTextBlock } from "next-sanity";

export interface ProjectsInterface {
  _id: string;
  title: string;
  metaDesc: string;
  liveLink: string;
  githubLink: string;
  projectImg?: string;
  slug: {
    current: string;
  };
  content?: PortableTextBlock[];
  estimatedRead: string;
  publishDate?: string;
}

export interface BlogsInterface {
  _id: string;
  title: string;
  metaDesc: string;
  blogImg?: string;
  slug: {
    current: string;
  };
  content?: PortableTextBlock[];
  estimatedRead: string;
  publishDate?: string;
}
