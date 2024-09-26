import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
// components
import SubNav from "../components/SubNav";
// styles
import styles from "./aboutPage.module.scss";

export default function AboutPage() {
  return (
    <>
      <SubNav />
      <div className={styles.page}>
        <section 
          id="introduction"
          className={styles.introduction}
        >
          <h3 className={styles.subtitle}>Hello, Stranger!</h3>
          <p>
            I am a UI/UX Engineer with a passion for crafting interactive experiences that push the boundaries of possibility.
          </p>
          <p>
            Originally from South Korea and now based in Vancouver, Canada, I have always been drawn to visually appealing creations. My love for creativity led me to study fashion, and after graduating, I gained valuable work experience. During that time, I explored and refined my design sense—experimenting with colors, shapes, and storytelling through design.
          </p>
          <p>
            I eventually found my passion in the digital world, which inspired me to pursue a second degree at BCIT. Alongside my studies, I taught myself to code and design digital products, constantly expanding my abilities to create engaging and dynamic user experiences.
          </p>
          <p>
            When collaborating on projects, I focus on applying design thinking to develop feasible solutions that effectively tell a story. Each project offers an opportunity to grow, both personally and professionally.
          </p>
          <p>
            I am always open to new opportunities and challenges, so feel free to reach out!
          </p>
        </section>
        <section 
          id="summary" 
          className={styles.summary}
        >
          <h3 className={styles.subtitle}>TLDR</h3>
          <div className={styles.summary_card_container}>
            <div className={styles.summary_card}>
              <h6>Experience</h6>
              <div>
                <div className={styles.card_list}>
                  <p className={styles.list_year}>2023</p>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Frontend Developer Intern</p>
                  </div>
                  <p>@PhoneBox</p>
                </div>
                <div className={styles.card_list}>
                  <p className={styles.list_year}>2021</p>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Assistant Online Merchandiser</p>
                  </div>
                  <p>@The Handsome Corp.</p>
                </div>
                <div className={styles.card_list}>
                  <p className={styles.list_year}>2020 - 2021</p>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Digital Marketing Consultant</p>
                  </div>
                  <p>@X NIHILO Pty Ltd</p>
                </div>
              </div>
            </div>
            <div className={styles.summary_card}>
              <h6>Expertises & Skills</h6>
              <div>
                <div className={styles.card_list}>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Frontend Development</p>
                  </div>
                  <p className={styles.list_keywords}>
                    HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Redux, WordPress, Webflow, SASS, TailwindCSS, Material UI, Bootstrap, REST API, Headless CMS
                  </p>
                </div>
                <div className={styles.card_list}>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>UIUX Design</p>
                  </div>
                  <p className={styles.list_keywords}>
                    Figma, Adobe XD
                  </p>
                </div>
                <div className={styles.card_list}>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Graphic Visual Design</p>
                  </div>
                  <p className={styles.list_keywords}>
                    Photoshop, Illustrator, InDesign, After Effect, Dimension, Premier Pro, Final Cut Pro
                  </p>
                </div>
                <div className={styles.card_list}>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Digital Marketing</p>
                  </div>
                  <p>
                    SEO, Social Media Management, Marketing Campaign, Marketing Research
                  </p>
                </div>               
              </div>
            </div>
            <div className={styles.summary_card}>
              <h6>Education</h6>
              <div>
                <div className={styles.card_list}>
                  <p className={styles.list_year}>2022 - 2023</p>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>British Columbia Institute of Technology</p>
                 </div>
                  <p>Diploma of New Media Design and Web Development</p>
                </div>
                <div className={styles.card_list}>
                  <p className={styles.list_year}>2018 - 2020</p>
                  <div className={styles.list_title_container}>
                    <MdOutlineSubdirectoryArrowRight size={14} /> 
                    <p>Royal Melbourne Institute of Technology</p>
                  </div>
                  <p>Bachelor of Fashion (Merchandise Management)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section 
          id="playlists" 
          className={styles.playlists}
        >
          <h3 className={styles.subtitle}>Playlists</h3>
        </section> */}
      </div>
    </>
  );
}
