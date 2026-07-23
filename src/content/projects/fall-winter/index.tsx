import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import logo from "./assets/logo.png";
import fall from "./assets/fall.webp";
import winter from "./assets/winter.webp";
import all from "./assets/all.webp";
import end from "./assets/end.webp";
import processStoryboard from "./assets/process_storyboard.jpg";
import processC4d from "./assets/process_c4d.png";
import processAefile from "./assets/process_aefile.jpg";
import processC4dModel from "./assets/process_c4dmodel.png";

const project: Project = {
  order: 30,
  preview: cover,
  label: "Stepping Through the Seasons",
  title: "Stepping Through the Seasons",
  subtitle: "2D & 3D Motion Design",
  description: (
    <>
      We created a shoe apparel line, ZAS.
      <br />
      The campaign highlights how ZAS effortlessly adapts to changing seasons
      while remaining versatile and stylish.
    </>
  ),
  route: "/FallWinter",
  logo,
  keyMoments: [fall, winter, all, end],
  process: [
    {
      img: processStoryboard,
      desc: "Initial sketching for storyboarding",
    },
    {
      img: processC4d,
      desc: "Exploring footwear animation via Cinema 4D",
    },
    {
      img: processAefile,
      desc: "Using After Effects to composite and animate graphics",
    },
    {
      img: processC4dModel,
      desc: "Using Cinema 4D to model the character and add the textures",
    },
  ],
  credits: (
    <>
      Motion Designers: Sabrina Chen, Harper Chung
      <br />
      Shoe Designer: Shunchun Hsieh (Check out his refine sketchbook:{" "}
      <a
        href="https://reurl.cc/QELRpp"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://reurl.cc/QELRpp
      </a>
      )
    </>
  ),
};

export default project;
