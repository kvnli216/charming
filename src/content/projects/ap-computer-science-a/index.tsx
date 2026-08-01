import type { Project } from "../../types";
import csaHl1 from "./assets/CSA_hl1.webp";
import csaHl1Small from "./assets/CSA_hl1_small.jpg";
import csaHl2 from "./assets/CSA_hl2.webp";
import csaHl2Small from "./assets/CSA_hl2_small.jpg";
import csaHl3 from "./assets/CSA_hl3.webp";
import csaHl3Small from "./assets/CSA_hl3_small.jpg";
import csaHl4 from "./assets/CSA_hl4.webp";
import csaHl4Small from "./assets/CSA_hl4_small.jpg";
import csaHl5 from "./assets/CSA_hl5.webp";
import csaHl5Small from "./assets/CSA_hl5_small.jpg";
import csaHl6 from "./assets/CSA_hl6.webp";
import csaHl6Small from "./assets/CSA_hl6_small.jpg";
import csaHl7 from "./assets/CSA_hl7.webp";
import csaHl7Small from "./assets/CSA_hl7_small.jpg";
import csaHl11 from "./assets/CSA_hl11.webp";
import csaHl11Small from "./assets/CSA_hl11_small.jpg";
import csaHl12 from "./assets/CSA_hl12.webp";
import csaHl12Small from "./assets/CSA_hl12_small.jpg";

const project: Project = {
  order: 10,
  isLocked: true,
  preview: csaHl11,
  previewPlaceholder: csaHl11Small,
  label: "AP Computer Science A",
  title: "AP Computer Science A",
  subtitle: "Educational Courses",
  tags: ["Education"],
  description: (
    <>
      <p>
        To support the College Board's AP Computer Science A curriculum, our
        team launched a series of 32 animated videos. Set in the fictional town
        of "Instantiation Springs", the story-driven series follows 4 local
        store owners, where they solve everyday problems using coding logic. As
        the Motion Designer on the project, I was responsible for the visual
        design and animation production throughout the series.
      </p>
      <p>
        By turning abstract code into real-life stories, we made complex
        computer science concepts way easier, and much more fun for students to
        grasp.
      </p>
      <p>
        Check out one of our full courses{" "}
        <a
          href="https://reurl.cc/qKQ2Kq"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </>
  ),
  details: [
    { label: "Role", value: "Motion Design" },
    { label: "Software Used", value: "Figma, After Effects, Premiere Pro" },
  ],
  route: "/APComputerScienceA",
  trailer: "/video/ap-computer-science-a.mp4",
  keyMoments: [
    { src: csaHl1, placeholder: csaHl1Small },
    { src: csaHl2, placeholder: csaHl2Small },
    { src: csaHl3, placeholder: csaHl3Small },
    { src: csaHl4, placeholder: csaHl4Small },
    { src: csaHl5, placeholder: csaHl5Small },
    { src: csaHl12, placeholder: csaHl12Small },
    { src: csaHl7, placeholder: csaHl7Small },
    { src: csaHl11, placeholder: csaHl11Small },
    { src: csaHl6, placeholder: csaHl6Small },
  ],
  // Placeholder structure for the ProcessTimeline module — copy and
  // reference media are stand-ins pending final copy and real assets.
  processTimeline: [
    {
      phase: "Phase 1",
      title: "Storyboard",
      description: "Placeholder description copy for this milestone.",
      media: { type: "gallery", tiles: 6 },
    },
    {
      phase: "Phase 1",
      title: "Character Pitch",
      description: "Placeholder description copy for this milestone.",
      media: { type: "gallery", tiles: 6 },
    },
    {
      phase: "Phase 2",
      title: "Assets Library",
      description: "Placeholder description copy for this milestone.",
      media: { type: "hero" },
    },
    {
      phase: "Phase 2",
      title: "Final Character Design",
      description: "Placeholder description copy for this milestone.",
      media: { type: "hero" },
    },
    {
      phase: "Phase 3",
      title: "Course Design Guideline",
      description: "Placeholder description copy for this milestone.",
      media: { type: "hero" },
    },
    {
      phase: "Phase 3",
      title: "Final Background",
      description: "Placeholder description copy for this milestone.",
      media: { type: "hero" },
    },
    {
      phase: "Phase 3",
      title: "Animation Template",
      description: "Placeholder description copy for this milestone.",
      media: { type: "gallery", tiles: 6 },
    },
  ],
  credits: (
    <>
      Client: The College Board
      <br />
      Director: Molly Shebeneck
      <br />
      Producers: Joey Ponce, Brigette Lopez, Mila Matveeva
      <br />
      Design Lead: Xiuqi Wang
      <br />
      Motion Designer: Sabrina Chen, Kai Yang, Justin Dormitzer, Zichun Wang
      <br />
      Character Animator: Julia Liu, Allen Cousett
    </>
  ),
};

export default project;
