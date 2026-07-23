import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import webp1CafeOrder from "./assets/webp1_cafeorder.webp";
import webp2CafeOrder from "./assets/webp2_cafeorder.webp";
import webp3Latin from "./assets/webp3_latin.webp";
import webp4Latin from "./assets/webp4_latin.webp";
import webp5Afam from "./assets/webp5_AFAM.webp";
import webp6Afam from "./assets/webp6_AFAM.webp";
import process1 from "./assets/process1.png";
import process2 from "./assets/process2.png";
import process3 from "./assets/process3_webp.webp";

const project: Project = {
  order: 10,
  isLocked: true,
  preview: cover,
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
      Check out one of our full course here:{" "}
      <a
        href="https://reurl.cc/qKQ2Kq"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://reurl.cc/qKQ2Kq
      </a>
    </>
  ),
  route: "/CollegeBoardAPDaily",
  keyMoments: [
    webp1CafeOrder,
    webp2CafeOrder,
    webp3Latin,
    webp4Latin,
    webp5Afam,
    webp6Afam,
  ],
  process: [
    {
      img: process1,
      desc: 'Brainstorming in Figma: Simplified Boolean Expressions by using a "Cafe Order" analogy to make abstract logic intuitive.',
    },
    {
      img: process2,
      desc: "Employing a distraction-free visual style and clear diagrams to maximize learner focus on core concepts.",
    },
    {
      img: process3,
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
