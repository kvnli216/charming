import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import coverSmall from "./assets/cover_small.jpg";
import frame1 from "./assets/TBW_gif1.gif";
import frame1Small from "./assets/TBW_gif1_small.jpg";
import frame2 from "./assets/TBW_gif2.gif";
import frame2Small from "./assets/TBW_gif2_small.jpg";
import frame3 from "./assets/TBW_gif3.gif";
import frame3Small from "./assets/TBW_gif3_small.jpg";
import frame4 from "./assets/TBW_gif4.gif";
import frame4Small from "./assets/TBW_gif4_small.jpg";

const project: Project = {
  order: 60,
  label: "The Beautiful Way ",
  preview: cover,
  previewPlaceholder: coverSmall,
  route: "/TheBeautifulWay",
  title: "The Beautiful Way",
  subtitle: "Explainer Video",
  mediaUrls: ["https://player.vimeo.com/video/1073021266?title=0&byline=0&portrait=0"],
  description: (
    <>
      This video translates the foundation’s commitment to inclusive,
      collaborative, and innovative healthcare into a clear, human-centered
      visual narrative.
      <br />
      Through cohesive motion and design,
      <br />
      we helped them communicates their vision of equitable and holistic
      well-being with clarity and impact.
    </>
  ),
  credits: (
    <>
      Collaboration with New View Media
      <br />
      Designer and Animator: Sabrina Chen
    </>
  ),
  animationTests: [
    { src: frame1, placeholder: frame1Small },
    { src: frame2, placeholder: frame2Small },
    { src: frame3, placeholder: frame3Small },
    { src: frame4, placeholder: frame4Small },
  ],
  process: [],
};

export default project;
