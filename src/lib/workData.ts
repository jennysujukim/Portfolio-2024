import { CategoryType } from "@/types/enums";
import { Work } from "@/types/models";

export const workData = () => {
  return {
    works: [
      {
        id: 1,
        slug: "sadie-lee",
        title: "Sadie Lee",
        description: "Headless CMS web development for graphic designer’s portfolio.",
        category: [ CategoryType.DEVELOP ],
        type: "Client work",
        keywords: [ "Web Development", "Headless CMS", "Next JS", "Sanity", "TypeScript", "Tailwind CSS" ],
        thumbnails: [
          {
            id: "1_1",
            src: "/works/sadie-lee/thumbnail-1.jpg",
            alt: "thumbnail 1",
          },
          {
            id: "1_2",
            src: "/works/sadie-lee/thumbnail-2.jpg",
            alt: "thumbnail 2",
          },
          {
            id: "1_3",
            src: "/works/sadie-lee/thumbnail-3.jpg",
            alt: "thumbnail 3",
          },
        ],
        livesite: "https://www.sadielee-design.com",
        repo: "https://github.com/jennysujukim/sadie-lee-personal-website",
        content: {
          intro: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit, tincidunt vitae elit ut, facilisis sagittis orci. Fusce semper, diam id rhoncus pulvinar, nisl elit vestibulum mauris, a suscipit magna diam sit amet dui. Fusce sit amet odio velit.",
          ],
          challenge: [
            "Mauris bibendum posuere fringilla. Quisque ut sodales leo, sed ullamcorper nunc.",
            "Ut placerat tellus erat, a lacinia diam malesuada pharetra. Vivamus in augue nisi. Nunc a egestas lectus."
          ],
          solution: [
            "Ut placerat tellus erat, a lacinia diam malesuada pharetra. Vivamus in augue nisi. Nunc a egestas lectus."
          ],
          images: [
            {
              id: 1,
              description: "image 1 description",
              src: ""
            },
            {
              id: 2,
              description: "image 2 description",
              src: ""
            }
          ],
          body: [
            { 
              id: 1,
              subtitle: "body 1 subtitle 1",
              text: [ "body 1 text 1", "body 1 text 2", "body 1 text 3" ],
            },
            {
              id: 2,
              text: [ "body 2 text 1" , "body 2 text 2" ]
            }
          ]
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
            src: "/works/sadie-lee/thumbnail-1.jpg",
            alt: "thumbnail 1"
          },
          {
            id: "2_2",
            src: "/works/sadie-lee/thumbnail-2.jpg",
            alt: "thumbnail 2"
          },
          {
            id: "2_3",
            src: "/works/sadie-lee/thumbnail-3.jpg",
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
          images: [
            {
              id: 1,
              description: "image 1 description",
              src: ""
            },
            {
              id: 2,
              description: "image 2 description",
              src: ""
            }
          ],
          body: [
            { 
              id: 1,
              subtitle: "body 1 subtitle 1",
              text: [ "body 1 text 1", "body 1 text 2", "body 1 text 3" ],
            },
            {
              id: 2,
              text: [ "body 2 text 1" , "body 2 text 2" ]
            }
          ]
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
            src: "/works/sadie-lee/thumbnail-1.jpg",
            alt: "thumbnail 1",
          },
          {
            id: "3_2",
            src: "/works/sadie-lee/thumbnail-2.jpg",
            alt: "thumbnail 2",
          },
          {
            id: "3_3",
            src: "/works/sadie-lee/thumbnail-3.jpg",
            alt: "thumbnail 3"
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
          images: [
            {
              id: 1,
              description: "image 1 description",
              src: ""
            },
            {
              id: 2,
              description: "image 2 description",
              src: ""
            }
          ],
          body: [
            { 
              id: 1,
              subtitle: "body 1 subtitle 1",
              text: [ "body 1 text 1", "body 1 text 2", "body 1 text 3" ],
            },
            {
              id: 2,
              text: [ "body 2 text 1" , "body 2 text 2" ]
            }
          ]
        }
      },
    ] as Work[]
  }
}