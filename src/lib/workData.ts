import { CategoryType, ContentType } from "@/types/enums";
import { Work } from "@/types/models";

export const workData = () => {
  return {
    works: [
      {
        id: 1,
        slug: "sadie-lee",
        title: "Sadie Lee",
        description: "Headless CMS web development for a graphic designer’s portfolio.",
        category: [ CategoryType.DEVELOP ],
        type: "Client work",
        keywords: [ "Web Development", "Headless CMS", "NextJS", "Sanity", "TypeScript", "MatterJS", "TailwindCSS" ],
        thumbnails: [
          {
            id: "1_1",
            type: ContentType.IMAGE,
            src: "/works/sadie-lee/thumbnail-2.jpg",
            alt: "thumbnail 2",
          },
          {
            id: "1_2",
            type: ContentType.VIDEO,
            src: "/works/sadie-lee/thumbnail-1.mp4",
            alt: "thumbnail 1",
          },
          {
            id: "1_3",
            type: ContentType.IMAGE,
            src: "/works/sadie-lee/thumbnail-3.jpg",
            alt: "thumbnail 1",
          },
        ],
        livesite: "https://www.sadielee-design.com",
        repo: "https://github.com/jennysujukim/sadie-lee-personal-website",
        content: {
          intro: [
            "Sadie Lee is a graphic designer based in London creating experimental design practices. The client requires the portfolio website that showcases her artworks but also interactive site that engage visitors and expresses her creativity at the same time. Main design is done by Sadie Lee, and I developed and offer the feasible and interactive features.",
          ],
          challenge: [
            "The client requires to edit by herself in the future without changing codebase. Balancing the creativity and feasibility on the web was challenging to negotiate while keeping the good UX system."
          ],
          solution: [
            "Integrate headless CMS so the work can keep creative visual but also effortlessly manage the content by client. Optimised SEO."
          ],
          graphics: [
            {
              id: 1,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-1.mp4",
              alt: "image 1 description",
            },
            {
              id: 2,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-2.jpg",
              alt: "image 2 description",
            },
            {
              id: 3,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-3.mp4",
              alt: "image 3 description",
            },
            {
              id: 4,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-5.mp4",
              alt: "image 5 description",
            },
            {
              id: 5,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-4.jpg",
              alt: "image 4 description",
            },
          ],
        }
      },
      {
        id: 2,
        slug: "belong-where-you-are",
        title: "Belong Where You Are",
        description: "Digital album that showcase photos taken with Fuji Quicksnap.",
        category: [ CategoryType.DEVELOP, CategoryType.DESIGN ],
        type: "Personal work",
        keywords: [ "Web Development", "Digital Design", "Next JS", "Contentful", "TypeScript" ],
        thumbnails: [
          {
            id: "2_1",
            type: ContentType.VIDEO,
            src: "/works/belong-where-you-are/thumbnail-1.mp4",
            alt: "thumbnail 1",
          },
          {
            id: "2_2",
            type: ContentType.IMAGE,
            src: "/works/belong-where-you-are/thumbnail-2.jpg",
            alt: "thumbnail 2",
          },
          {
            id: "2_3",
            type: ContentType.IMAGE,
            src: "/works/belong-where-you-are/thumbnail-3.jpg",
            alt: "thumbnail 3",
          },
        ],
        livesite: "https://belong-where-you-are.vercel.app",
        repo: "https://github.com/jennysujukim/belong-where-you-are",
        content: {
          intro: [
            "intro sentence 1",
            "intro sentence 2",
            "intro sentence 3",
          ],
          challenge: [
            "challenge sentence 1",
            "challenge sentence 2"
          ],
          solution: [
            "solution sentence 1",
            "solution sentence 2",
          ],
          graphics: [
            {
              id: 1,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-1.mp4",
              alt: "image 1 description",
            },
            {
              id: 2,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-2.jpg",
              alt: "image 2 description",
            },
            {
              id: 3,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-3.mp4",
              alt: "image 3 description",
            },
            {
              id: 4,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-5.mp4",
              alt: "image 5 description",
            },
            {
              id: 5,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-4.jpg",
              alt: "image 4 description",
            },
          ],
        }
      },
      {
        id: 3,
        slug: "phonebox-app",
        title: "PhoneBox App",
        description: "Digital album that showcase photos taken with Fuji Quicksnap.",
        category: [ CategoryType.DEVELOP ],
        type: "Personal work",
        keywords: [ "Web Development", "Digital Design", "Next JS", "Contentful", "TypeScript" ],
        thumbnails: [
          {
            id: "3_1",
            type: ContentType.IMAGE,
            src: "/works/phonebox/thumbnail-1.jpg",
            alt: "thumbnail 1",
          },
          {
            id: "3_2",
            type: ContentType.IMAGE,
            src: "/works/phonebox/thumbnail-2.jpg",
            alt: "thumbnail 2",
          },
          {
            id: "3_3",
            type: ContentType.IMAGE,
            src: "/works/phonebox/thumbnail-3.jpg",
            alt: "thumbnail 3",
          },
        ],
        livesite: "https://belong-where-you-are.vercel.app",
        repo: "https://github.com/jennysujukim/belong-where-you-are",
        content: {
          intro: [
            "intro sentence 1",
            "intro sentence 2",
            "intro sentence 3",
          ],
          challenge: [
            "challenge sentence 1",
            "challenge sentence 2"
          ],
          solution: [
            "solution sentence 1",
            "solution sentence 2",
          ],
          graphics: [
            {
              id: 1,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-1.mp4",
              alt: "image 1 description",
            },
            {
              id: 2,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-2.jpg",
              alt: "image 2 description",
            },
            {
              id: 3,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-3.mp4",
              alt: "image 3 description",
            },
            {
              id: 4,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-5.mp4",
              alt: "image 5 description",
            },
            {
              id: 5,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-4.jpg",
              alt: "image 4 description",
            },
          ],
        }
      },
      {
        id: 4,
        slug: "daily-protein",
        title: "Daily Protein Tracker",
        description: "Sign up, calculate, track your daily protein intake.",
        category: [ CategoryType.DEVELOP ],
        type: "Personal work",
        keywords: [ "Web Development", "MERN", "TypeScript", "Redux", "Firebase", "MUI" ],
        thumbnails: [
          {
            id: "4_1",
            type: ContentType.IMAGE,
            src: "/works/daily-protein/thumbnail-1.jpg",
            alt: "thumbnail 1",
          },
          {
            id: "4_2",
            type: ContentType.VIDEO,
            src: "/works/daily-protein/thumbnail-2.mp4",
            alt: "thumbnail 2",
          },
          {
            id: "4_3",
            type: ContentType.IMAGE,
            src: "/works/daily-protein/thumbnail-3.jpg",
            alt: "thumbnail 3",
          },
        ],
        livesite: "https://daily-protein.seojeongkim.com/",
        repo: "https://github.com/jennysujukim/DailyProtein2.0_MERN",
        content: {
          intro: [
            "intro sentence 1",
            "intro sentence 2",
            "intro sentence 3",
          ],
          challenge: [
            "challenge sentence 1",
            "challenge sentence 2"
          ],
          solution: [
            "solution sentence 1",
            "solution sentence 2",
          ],
          graphics: [
            {
              id: 1,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-1.mp4",
              alt: "image 1 description",
            },
            {
              id: 2,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-2.jpg",
              alt: "image 2 description",
            },
            {
              id: 3,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-3.mp4",
              alt: "image 3 description",
            },
            {
              id: 4,
              type: ContentType.VIDEO,
              src: "/works/sadie-lee/images/content-5.mp4",
              alt: "image 5 description",
            },
            {
              id: 5,
              type: ContentType.IMAGE,
              src: "/works/sadie-lee/images/content-4.jpg",
              alt: "image 4 description",
            },
          ],
        }
      },
      // {
      //   id: 5,
      //   slug: "dancheong",
      //   title: "Dancheong",
      //   description: "Graphic design inspired by Korean traditional dancheong.",
      //   category: [ CategoryType.DESIGN ],
      //   type: "Personal work",
      //   keywords: [ "Graphic Design", "Digital Design", "Illustration" ],
      //   thumbnails: [
      //     // {
      //     //   id: "3_1",
      //     //   type: ContentType.IMAGE,
      //     //   src: "/works/phonebox/thumbnail-1.jpg",
      //     //   alt: "thumbnail 1",
      //     // },
      //     // {
      //     //   id: "3_2",
      //     //   type: ContentType.IMAGE,
      //     //   src: "/works/phonebox/thumbnail-2.jpg",
      //     //   alt: "thumbnail 2",
      //     // },
      //   ],
      //   livesite: "https://daily-protein.seojeongkim.com/",
      //   repo: "https://github.com/jennysujukim/DailyProtein2.0_MERN",
      //   content: {
      //     intro: [
      //       "intro sentence 1",
      //       "intro sentence 2",
      //       "intro sentence 3",
      //     ],
      //     challenge: [
      //       "challenge sentence 1",
      //       "challenge sentence 2"
      //     ],
      //     solution: [
      //       "solution sentence 1",
      //       "solution sentence 2",
      //     ],
      //   }
      // },
      // {
      //   id: 6,
      //   slug: "everything-turns-to-poster",
      //   title: "Everything Turns to Poster",
      //   description: "Graphic design inspired by Korean traditional dancheong.",
      //   category: [ CategoryType.DESIGN ],
      //   type: "Personal work",
      //   keywords: [ "Graphic Design", "Digital Design", "Illustration" ],
      //   thumbnails: [
      //     // {
      //     //   id: "3_1",
      //     //   type: ContentType.IMAGE,
      //     //   src: "/works/phonebox/thumbnail-1.jpg",
      //     //   alt: "thumbnail 1",
      //     // },
      //     // {
      //     //   id: "3_2",
      //     //   type: ContentType.IMAGE,
      //     //   src: "/works/phonebox/thumbnail-2.jpg",
      //     //   alt: "thumbnail 2",
      //     // },
      //   ],
      //   livesite: "https://daily-protein.seojeongkim.com/",
      //   repo: "https://github.com/jennysujukim/DailyProtein2.0_MERN",
      //   content: {
      //     intro: [
      //       "intro sentence 1",
      //       "intro sentence 2",
      //       "intro sentence 3",
      //     ],
      //     challenge: [
      //       "challenge sentence 1",
      //       "challenge sentence 2"
      //     ],
      //     solution: [
      //       "solution sentence 1",
      //       "solution sentence 2",
      //     ],
      //   }
      // },
      // {
      //   id: 7,
      //   slug: "sannerexperiments",
      //   title: "Scanner Experiments",
      //   description: "Graphic design inspired by Korean traditional dancheong.",
      //   category: [ CategoryType.DESIGN ],
      //   type: "Personal work",
      //   keywords: [ "Graphic Design", "Digital Design", "Illustration" ],
      //   thumbnails: [
      //     // {
      //     //   id: "3_1",
      //     //   type: ContentType.IMAGE,
      //     //   src: "/works/phonebox/thumbnail-1.jpg",
      //     //   alt: "thumbnail 1",
      //     // },
      //     // {
      //     //   id: "3_2",
      //     //   type: ContentType.IMAGE,
      //     //   src: "/works/phonebox/thumbnail-2.jpg",
      //     //   alt: "thumbnail 2",
      //     // },
      //   ],
      //   livesite: "https://daily-protein.seojeongkim.com/",
      //   repo: "https://github.com/jennysujukim/DailyProtein2.0_MERN",
      //   content: {
      //     intro: [
      //       "intro sentence 1",
      //       "intro sentence 2",
      //       "intro sentence 3",
      //     ],
      //     challenge: [
      //       "challenge sentence 1",
      //       "challenge sentence 2"
      //     ],
      //     solution: [
      //       "solution sentence 1",
      //       "solution sentence 2",
      //     ],
      //   }
      // },
    ] as Work[]
  }
}