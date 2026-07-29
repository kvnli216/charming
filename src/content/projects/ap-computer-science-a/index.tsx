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
  isLocked: true,
  preview: cover,
  previewPlaceholder: coverSmall,
  label: "AP Computer Science A",
  title: "AP Computer Science A",
  subtitle: "Educational Courses",
  description: (
    <>
      <br />
      To support the College Board's AP Computer Science A curriculum, we
      launched a series of 32 animated videos. As the Motion Designer on the
      project, I was responsible for the visual design and animation production
      throughout the series.
      <br />
      Set in the fictional town of "Instantiation Springs", the story-driven
      series follows 4 local store owners as they navigate daily challenges and
      solve them using core coding concepts.
      <br />
      By anchoring abstract technical logic to relatable, narrative scenarios,
      the project makes complex computer science fundamentals approachable and
      engaging for students.
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
  route: "/APComputerScienceA",
  mediaUrls: ["/video/ap-computer-science-a.mp4"],
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
