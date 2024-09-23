import { CategoryType, ContentType } from "@/types/enums";
import { Work } from "@/types/models";

export const workData = () => {
  return {
    works: [
      {
        id: 1,
        bgColor: "#fdf2f1",
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
        private: false,
        livesite: "https://www.sadielee-design.com",
        repo: "https://github.com/jennysujukim/sadie-lee-personal-website",
        content: {
          intro: [
            "Sadie Lee, a London-based graphic designer, specializes in experimental design practices. Her portfolio site showcases her artworks while providing an interactive experience that engages visitors and reflects her creativity. Sadie led the main design, while I developed and implemented interactive features to bring her vision to life.",
          ],
          challenge: [
            "The client needed the ability to edit the site independently without altering the codebase. She also requested a unique interactive feature on the homepage to engage visitors."
          ],
          solution: [
            "I integrated a headless CMS to enable effortless content management while maintaining the creative visual design. I also recommended MatterJS for designing 2D rigid body graphics, balancing creativity with technical feasibility. Additionally, the site was optimized for SEO to improve visibility and performance."
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
        bgColor: "#ff6870",
        slug: "belong-where-you-are",
        title: "Belong Where You Are",
        description: "Interactive digital photo album.",
        category: [ CategoryType.DEVELOP, CategoryType.DESIGN ],
        type: "Personal work",
        keywords: [ "Web Development", "Digital Design", "NextJS", "Contentful", "TypeScript" ],
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
        private: false,
        livesite: "https://belong-where-you-are.vercel.app",
        repo: "https://github.com/jennysujukim/belong-where-you-are",
        content: {
          intro: [
            "This personal project showcases film photos I’ve taken with a Fuji Quicksnap. As someone who has lived in different cities, I find joy and comfort in feeling a sense of belonging wherever I am. I created this web space to preserve and share those memories. Users can easily navigate through the photos by scrolling or using arrow buttons to view images, allowing them to seamlessly experience the story behind each one."
          ],
          challenge: [
            "I want to manage large images and their content efficiently, without accessing the codebase, while ensuring optimal site speed.", 
          ],
          solution: [
            "I seamlessly integrated server and client components in Next.js and fetched data from Contentful CMS to optimize site performance and streamline content management."
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
        bgColor: "#edf9fe",
        slug: "phonebox-app",
        title: "PhoneBox Partner Portal App",
        description: "Project to launch mobile app during the internship at PhoneBox.",
        category: [ CategoryType.DEVELOP ],
        type: "Company work",
        keywords: [ "React Native", "Expo", "TypeScript", "Redux" ],
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
        private: true,
        livesite: "https://belong-where-you-are.vercel.app",
        repo: "https://github.com/jennysujukim/belong-where-you-are",
        content: {
          intro: [
            "PhoneBox is a company providing network services for short-term visitors in Canada and the U.S. During my internship, I contributed to the development of the newly launched Partner Portal App."
          ],
          challenge: [
            "It is essential to create a seamless experience on both the web and app using React Native. Fetching and displaying up-to-date data from the server database is crucial due to extensive API communication by users."
          ],
          solution: [
            "I integrated a REST API into the frontend and utilized Redux to manage and preserve state across the entire app, ensuring that users see up-to-date data as changes occur.",
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
        bgColor: "#ffc1a4",
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
        private: false,
        livesite: "https://daily-protein.seojeongkim.com/",
        repo: "https://github.com/jennysujukim/DailyProtein2.0_MERN",
        content: {
          intro: [
            "This personal project helps users track their daily protein intake. As someone passionate about healthy eating, I know calculating the right protein amount can be tricky, depending on body type and goals. I built a simple web app where users can easily calculate their daily protein needs, set goals, and log meals to track progress."
          ],
          challenge: [
            "I need to fetch nutrition data for each food item, allowing users to create accounts and perform CRUD operations on their protein intake.",
          ],
          solution: [
            "I integrated the Edamam API to retrieve food nutrition, enabling users to search food from the API's database. I also connected Firebase for user authentication and used MongoDB to allow users to log their protein intake.",
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
    ] as Work[]
  }
}