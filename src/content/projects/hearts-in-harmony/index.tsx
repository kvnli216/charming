import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import frame1 from "./assets/1.png";
import frame2 from "./assets/2.png";
import frame3 from "./assets/3.png";
import frame4 from "./assets/4.png";
import frame5 from "./assets/5.png";
import frame6 from "./assets/6.png";

const project: Project = {
  order: 40,
  label: "Hearts in Harmony",
  preview: cover,
  route: "/HeartsInHarmony",
  title: "Hands On Me",
  mediaUrls: ["https://player.vimeo.com/video/900298628?h=7d99a41d2c&title=0&byline=0&portrait=0"],
  subtitle: "Motion Design",
  description: (
    <>
      This project is a personal motion design study for a conceptual perfume
      brand.
      <br />
      The goal was to translate the essence of romance and elegance into a
      captivating visual narrative.
      <br />
      By focusing on the interplay of the heart-shaped glass textures and
      fluid motion, I aimed to evoke a sense of allure and sophistication.
    </>
  ),
  credits: <>Credits: Personal work</>,
  styleFrames: [frame1, frame2, frame3, frame4, frame5, frame6],
  process: [],
};

export default project;
