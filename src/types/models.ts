import { CategoryType } from "./enums";

export type Work = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: CategoryType[];
  type: string;
  keywords: string[];
  thumbnails: {
    id: string;
    src: string;
    alt: string;
  }[];
  livesite: string;
  repo: string;
  content: {
    intro: string[];
    challenge: string[];
    solution: string[];
    images: {
      id: number;
      description: string;
      src: string;
    }[];
    body: {
      id: number;
      subtitle: string;
      text: string[];
    }[];
  }
}