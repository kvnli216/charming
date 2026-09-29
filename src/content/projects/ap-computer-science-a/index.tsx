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
import timeline01 from "./assets/timeline/CSA01_storyboard.png";
import timeline01Small from "./assets/timeline/CSA01_storyboard_small.jpg";
import timeline02 from "./assets/timeline/CSA02_characterpitch.png";
import timeline02Small from "./assets/timeline/CSA02_characterpitch_small.jpg";
import timeline03 from "./assets/timeline/CSA03_AssetsLibrary.png";
import timeline03Small from "./assets/timeline/CSA03_AssetsLibrary_small.jpg";
import timeline04 from "./assets/timeline/CSA04_Characterdesign.png";
import timeline04Small from "./assets/timeline/CSA04_Characterdesign_small.jpg";
import timeline05 from "./assets/timeline/CSA05_CourseDesignGuideline.png";
import timeline05Small from "./assets/timeline/CSA05_CourseDesignGuideline_small.jpg";
import timeline06 from "./assets/timeline/CSA06_backgrounddesign.png";
import timeline06Small from "./assets/timeline/CSA06_backgrounddesign_small.jpg";
import timeline07 from "./assets/timeline/CSA07_Animationtemplate.png";
import timeline07Small from "./assets/timeline/CSA07_Animationtemplate_small.jpg";

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
  processTimeline: [
    {
      phase: "Phase 1",
      title: "Storyboard",
      description: (
        <p>
          I used split-screen layouts in the early storyboards to bridge the
          abstract logic with real-world context. One side shows the code
          editor, while the other side shows the narrative animation. This
          parallel view lets learners easily connect abstract programming logic
          with real world.
        </p>
      ),
      media: {
        type: "hero",
        src: timeline01,
        placeholder: timeline01Small,
        aspectRatio: 2880 / 1880,
      },
    },
    {
      phase: "Phase 1",
      title: "Character Pitch",
      description: (
        <>
          <p>
            I started with basic shapes to keep the design simple, and
            consistent throughout the space. While the team ultimately selected
            a different direction to better align with the overall platform
            guidelines, this exploration helped establish the narrative tone.
          </p>
          <p>
            For the storefront, I went with a flat, 2D frontal view. And this
            keeps the visual clean, and easy to read.
          </p>
        </>
      ),
      media: {
        type: "hero",
        src: timeline02,
        placeholder: timeline02Small,
        aspectRatio: 2880 / 3495,
      },
    },
    {
      phase: "Phase 2",
      title: "Assets Library",
      description: (
        <p>
          To meet a tight timeline, we broke down the scripts into a complete
          list of reusable assets, including character animations and visual
          elements. Instead of working video by video, we produced all the
          animations in batches and assembled the final educational videos at
          the end. This system saved significant time and ensured consistency.
        </p>
      ),
      media: {
        type: "hero",
        src: timeline03,
        placeholder: timeline03Small,
        aspectRatio: 2880 / 1402,
      },
    },
    {
      phase: "Phase 2",
      title: "Final Character Design",
      description: (
        <>
          <p>Designed by Allen Cousett.</p>
          <p>
            <strong>Shape Language:</strong> We built characters using basic
            geometric shapes to ensure visual consistency throughout the series.
          </p>
          <p>
            <strong>Personality-Driven Outfits:</strong> Costumes were
            specifically designed to reflect each character's unique personality
            within the story.
          </p>
          <p>
            <strong>Simplified Anatomy:</strong> We designed rounded, simplified
            hands to reduce animation complexity, saving substantial production
            time.
          </p>
          <p>
            <strong>Inclusive Color Palette:</strong> We chose non-realistic
            skin tones to avoid representing any specific race, making the
            characters universally relatable.
          </p>
        </>
      ),
      media: {
        type: "hero",
        src: timeline04,
        placeholder: timeline04Small,
        aspectRatio: 2998 / 1090,
      },
    },
    {
      phase: "Phase 3",
      title: "Course Design Guideline",
      description: (
        <>
          <p>Designed by Xiuqi Wang.</p>
          <p>
            Our Lead Design built out this design guideline for the non
            story-driven part of the course. We create style frames based on
            this guideline to maintain consistency.
          </p>
        </>
      ),
      media: {
        type: "hero",
        src: timeline05,
        placeholder: timeline05Small,
        aspectRatio: 2880 / 1776,
      },
    },
    {
      phase: "Phase 3",
      title: "Final Background",
      description: (
        <>
          <p>Designed by Xiuqi Wang.</p>
          <p>
            We used a flat, zero-depth frontal view to keep the visual clean and
            straightforward. And a monochromatic background so the fully colored
            characters would stand out immediately.
          </p>
        </>
      ),
      media: {
        type: "hero",
        src: timeline06,
        placeholder: timeline06Small,
        aspectRatio: 2880 / 1389,
      },
    },
    {
      phase: "Phase 3",
      title: "Animation Template",
      description: (
        <p>
          Once all animation assets were ready, motion designers had 2 to 3
          days to assemble each full episode (ranging from 5 to 20 minutes)
          using standardized After Effects templates. The finished videos
          were then uploaded to Frame.io for team review and client
          feedback.
        </p>
      ),
      media: {
        type: "hero",
        src: timeline07,
        placeholder: timeline07Small,
        aspectRatio: 2880 / 1389,
      },
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
