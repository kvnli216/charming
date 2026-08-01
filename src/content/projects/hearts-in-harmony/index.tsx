import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import coverSmall from "./assets/cover_small.jpg";
import frame1 from "./assets/1.png";
import frame1Small from "./assets/1_small.jpg";
import frame2 from "./assets/2.png";
import frame2Small from "./assets/2_small.jpg";
import frame3 from "./assets/3.png";
import frame3Small from "./assets/3_small.jpg";
import frame4 from "./assets/4.png";
import frame4Small from "./assets/4_small.jpg";
import frame5 from "./assets/5.png";
import frame5Small from "./assets/5_small.jpg";
import frame6 from "./assets/6.png";
import frame6Small from "./assets/6_small.jpg";

const project: Project = {
  order: 40,
  label: "Hearts in Harmony",
  preview: cover,
  previewPlaceholder: coverSmall,
  route: "/HeartsInHarmony",
  title: "Hands On Me",
  mediaUrls: ["/video/hearts-in-harmony/perfume.mp4"],
  subtitle: "Motion Design",
  tags: ["Motion Design"],
  description: (
    <>
      This project is a personal motion design study for a conceptual perfume
      brand.
      <br />
      The goal was to translate the essence of romance and elegance into a
      captivating visual narrative.
      <br />
      By focusing on the interplay of the heart-shaped glass textures and fluid
      motion, I aimed to evoke a sense of allure and sophistication.
    </>
  ),
  credits: <>Credits: Personal work</>,
  styleFrames: [
    { src: frame1, placeholder: frame1Small },
    { src: frame2, placeholder: frame2Small },
    { src: frame3, placeholder: frame3Small },
    { src: frame4, placeholder: frame4Small },
    { src: frame5, placeholder: frame5Small },
    { src: frame6, placeholder: frame6Small },
  ],
  process: [],
};

export default project;
