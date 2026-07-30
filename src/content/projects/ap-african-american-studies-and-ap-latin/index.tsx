import type { Project } from "../../types";
import afamHl1 from "./assets/AFAM/AFAM_hl1.webp";
import afamHl2 from "./assets/AFAM/AFAM_hl2.webp";
import afamHl3 from "./assets/AFAM/AFAM_hl3.webp";
import afamHl4 from "./assets/AFAM/AFAM_hl4.webp";
import afamHl5 from "./assets/AFAM/AFAM_hl5.webp";
import afamHl6 from "./assets/AFAM/AFAM_hl6.webp";
import afamHl7 from "./assets/AFAM/AFAM_hl7.webp";
import afamHl8 from "./assets/AFAM/AFAM_hl8.webp";
import afamHl9 from "./assets/AFAM/AFAM_hl9.webp";
import latinHl1 from "./assets/Latin/Latin_hl1.webp";
import latinHl2 from "./assets/Latin/Latin_hl2.webp";
import latinHl3 from "./assets/Latin/Latin_hl3.webp";
import latinHl4 from "./assets/Latin/Latin_hl4.webp";
import latinHl5 from "./assets/Latin/Latin_hl5.webp";
import latinHl6 from "./assets/Latin/Latin_hl6.webp";
import latinHl7 from "./assets/Latin/Latin_hl7.webp";
import latinHl8 from "./assets/Latin/Latin_hl8.webp";
import latinHl9 from "./assets/Latin/Latin_hl9.webp";

// TODO: replace with a dedicated cover image/gif once one is provided; currently reusing the first AFAM key moment.
const coverPlaceholder = afamHl1;

const project: Project = {
  order: 15,
  isLocked: true,
  preview: coverPlaceholder,
  label: "AP African American Studies & AP Latin",
  title: "AP African American Studies & AP Latin",
  subtitle: "Educational Courses",
  tags: ["Education"],
  details: [
    { label: "Role", value: "Motion Design" },
    { label: "Software Used", value: "Figma, After Effects, Premiere Pro" },
  ],
  sections: [
    {
      description: (
        <>
          <p>
            <strong>AP African American Studies</strong>
          </p>
          <p>
            This College Board curriculum covers 4 units that walk students
            through the rich history of the African diaspora. It highlights the
            major cultural, political, and social moments that shaped the Black
            experience over centuries. All video content was produced
            specifically for College Board's AP Classroom platform.
          </p>
          <p>
            <strong>Motion & Visual Direction:</strong> To align with the
            historical themes, we incorporated paper textures and hand-drawn
            annotations throughout the motion templates. This approach brought a
            warm, human element to ancient texts and archival materials.
          </p>
        </>
      ),
      keyMoments: [
        { src: afamHl1 },
        { src: afamHl2 },
        { src: afamHl3 },
        { src: afamHl4 },
        { src: afamHl5 },
        { src: afamHl6 },
        { src: afamHl7 },
        { src: afamHl8 },
        { src: afamHl9 },
      ],
    },
    {
      description: (
        <>
          <p>
            <strong>AP Latin</strong>
          </p>
          <p>
            This 8 unit course helps students read, translate, and analyze real
            ancient Latin texts like Vergil's Aeneid and Pliny's Letters. All
            released directly on College Board's AP Classroom.
          </p>
          <p>
            <strong>Motion & Visual Direction:</strong> We brought this motion
            style with a posterize time effect. This subtle stop-motion feel
            mimics the sensation of flipping through an illustrated storybook,
            making dense history feel engaging and approachable. Additionally,
            this course is reading-heavy, we precisely synchronized text
            highlights with the voiceover, guiding students through complex
            translations seamlessly.
          </p>
        </>
      ),
      keyMoments: [
        { src: latinHl1 },
        { src: latinHl2 },
        { src: latinHl3 },
        { src: latinHl4 },
        { src: latinHl5 },
        { src: latinHl6 },
        { src: latinHl7 },
        { src: latinHl8 },
        { src: latinHl9 },
      ],
    },
  ],
  route: "/APAfricanAmericanStudies&APLatin",
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
      Motion Designer: Sabrina Chen, Kai Yang, Justin Dormitzer, Zichun Wang,
      Allen Cousett
    </>
  ),
};

export default project;
