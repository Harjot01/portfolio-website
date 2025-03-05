import { PortableTextBlock } from "next-sanity";
export interface AboutInterface {
  _id: string;
  resume: {
    asset: {
      _ref: string;
    };
  };
}
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
  isFeaturedProject: boolean;
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
  isFeaturedBlog: boolean;
  publishDate?: string;
}

export interface ContactInterface {
  _id: string;
  githubProfile: string;
  linkedinProfile: string;
  instagramProfile: string;
  gmailLink: string;
}
