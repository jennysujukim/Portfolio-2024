import { CategoryType, ContentType } from "./enums";

export type Work = {
  id: number;
  bgColor: string; 
  slug: string;
  title: string;
  description: string;
  category: CategoryType[];
  type: string;
  keywords: string[];
  thumbnails: {
    id: string;
    type: ContentType;
    src: string;
    placeholder?: string;
    alt: string;
  }[];
  private: boolean;
  livesite?: string;
  repo?: string;
  content: {
    intro: string[];
    challenge: string[];
    solution: string[];
    graphics: {
      id: number;
      type: ContentType;
      src: string;
      placeholder?: string;
      alt: string;
      description?: string;
    }[];
  }
}