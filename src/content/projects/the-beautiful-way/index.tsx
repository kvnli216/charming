import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import frame1 from "./assets/TBW_gif1.gif";
import frame2 from "./assets/TBW_gif2.gif";
import frame3 from "./assets/TBW_gif3.gif";
import frame4 from "./assets/TBW_gif4.gif";

const project: Project = {
  order: 60,
  label: "The Beautiful Way ",
  preview: cover,
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
  animationTests: [frame1, frame2, frame3, frame4],
  process: [],
};

export default project;
