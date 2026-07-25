import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import coverSmall from "./assets/cover_small.jpg";
import webp1CafeOrder from "./assets/webp1_cafeorder.webp";
import webp1CafeOrderSmall from "./assets/webp1_cafeorder_small.jpg";
import webp2CafeOrder from "./assets/webp2_cafeorder.webp";
import webp2CafeOrderSmall from "./assets/webp2_cafeorder_small.jpg";
import webp3Latin from "./assets/webp3_latin.webp";
import webp3LatinSmall from "./assets/webp3_latin_small.jpg";
import webp4Latin from "./assets/webp4_latin.webp";
import webp4LatinSmall from "./assets/webp4_latin_small.jpg";
import webp5Afam from "./assets/webp5_AFAM.webp";
import webp5AfamSmall from "./assets/webp5_AFAM_small.jpg";
import webp6Afam from "./assets/webp6_AFAM.webp";
import webp6AfamSmall from "./assets/webp6_AFAM_small.jpg";
import process1 from "./assets/process1.png";
import process1Small from "./assets/process1_small.jpg";
import process2 from "./assets/process2.png";
import process2Small from "./assets/process2_small.jpg";
import process3 from "./assets/process3_webp.webp";
import process3Small from "./assets/process3_webp_small.jpg";

const project: Project = {
  order: 10,
  isLocked: false,
  preview: cover,
  previewPlaceholder: coverSmall,
  label: "College Board AP Daily",
  title: "College Board AP Daily",
  subtitle: "Educational Courses",
  description: (
    <>
      <br />
      Visual production for a 17-month comprehensive project aimed at high
      school students across the U.S.
      <br />
      We produced 97 instructional videos (5-15 minutes each) spanning diverse
      subjects including
      <br />
      African American Studies, Latin, Biology, and Computer Science A (CSA).
      <br />
      My role focused on transforming complex academic frameworks into
      engaging motion graphics to enhance student learning.
      <br />
      Check out one of our full courses{" "}
      <a
        href="https://reurl.cc/qKQ2Kq"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </>
  ),
  route: "/CollegeBoardAPDaily",
  keyMoments: [
    { src: webp1CafeOrder, placeholder: webp1CafeOrderSmall },
    { src: webp2CafeOrder, placeholder: webp2CafeOrderSmall },
    { src: webp3Latin, placeholder: webp3LatinSmall },
    { src: webp4Latin, placeholder: webp4LatinSmall },
    { src: webp5Afam, placeholder: webp5AfamSmall },
    { src: webp6Afam, placeholder: webp6AfamSmall },
  ],
  process: [
    {
      img: process1,
      placeholder: process1Small,
      desc: 'Brainstorming in Figma: Simplified Boolean Expressions by using a "Cafe Order" analogy to make abstract logic intuitive.',
    },
    {
      img: process2,
      placeholder: process2Small,
      desc: "Employing a distraction-free visual style and clear diagrams to maximize learner focus on core concepts.",
    },
    {
      img: process3,
      placeholder: process3Small,
      desc: "Developing custom AE templates to ensure visual consistency and a cohesive animation style across the project.",
    },
  ],
  credits: (
    <>
      Director: Molly Shebeneck
      <br />
      Producers: Joey Ponce, Brigette Lopez, Mila Matveeva
      <br />
      Design Lead: Xiuqi Wang
      <br />
      Motion Designers: Sabrina Chen, Zichun Wang, Justin Dormitzer, Allen
      Cousett, Kai Yang
    </>
  ),
};

export default project;
