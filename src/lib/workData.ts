import { CategoryType } from "@/types/enums"

export const workData = () => {
  return {
    works: [
      {
        id: 1,
        title: "Sadie Lee",
        description: "Headless CMS web development for graphic designer’s portfolio.",
        category: [ CategoryType.DEVELOP ],
        type: "Client work",
        keywords: [ "Web Development", "Headless CMS", "Next JS", "Sanity", "TypeScript", "Tailwind CSS" ],
        livesite: "https://www.sadielee-design.com",
        repo: "https://github.com/jennysujukim/sadie-lee-personal-website",
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
        id: 2,
        title: "Belong Where You Are",
        description: "Digital album that showcase photos taken with Fuji Quicksnap.",
        category: [ CategoryType.DEVELOP, CategoryType.DESIGN ],
        type: "Personal work",
        keywords: [ "Web Development", "Digital Design", "Next JS", "Contentful", "TypeScript" ],
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
    ]
  }
}