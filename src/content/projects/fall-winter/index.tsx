import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import coverSmall from "./assets/cover_small.jpg";
import logo from "./assets/logo.png";
import fall from "./assets/fall.webp";
import fallSmall from "./assets/fall_small.jpg";
import winter from "./assets/winter.webp";
import winterSmall from "./assets/winter_small.jpg";
import all from "./assets/all.webp";
import allSmall from "./assets/all_small.jpg";
import end from "./assets/end.webp";
import endSmall from "./assets/end_small.jpg";
import processStoryboard from "./assets/process_storyboard.jpg";
import processStoryboardSmall from "./assets/process_storyboard_small.jpg";
import processC4d from "./assets/process_c4d.png";
import processC4dSmall from "./assets/process_c4d_small.jpg";
import processAefile from "./assets/process_aefile.jpg";
import processAefileSmall from "./assets/process_aefile_small.jpg";
import processC4dModel from "./assets/process_c4dmodel.png";
import processC4dModelSmall from "./assets/process_c4dmodel_small.jpg";

const project: Project = {
  order: 30,
  preview: cover,
  previewPlaceholder: coverSmall,
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
  keyMoments: [
    { src: fall, placeholder: fallSmall },
    { src: winter, placeholder: winterSmall },
    { src: all, placeholder: allSmall },
    { src: end, placeholder: endSmall },
  ],
  process: [
    {
      img: processStoryboard,
      placeholder: processStoryboardSmall,
      desc: "Initial sketching for storyboarding",
    },
    {
      img: processC4d,
      placeholder: processC4dSmall,
      desc: "Exploring footwear animation via Cinema 4D",
    },
    {
      img: processAefile,
      placeholder: processAefileSmall,
      desc: "Using After Effects to composite and animate graphics",
    },
    {
      img: processC4dModel,
      placeholder: processC4dModelSmall,
      desc: "Using Cinema 4D to model the character and add the textures",
    },
  ],
  credits: (
    <>
      Motion Designers: Sabrina Chen, Harper Chung
      <br />
      Shoe Designer: Shunchun Hsieh (Check out his{" "}
      <a
        href="https://reurl.cc/QELRpp"
        target="_blank"
        rel="noopener noreferrer"
      >
        refine sketchbook
      </a>
      )
    </>
  ),
};

export default project;
