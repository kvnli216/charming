import type { Project } from "../../types";
import cover from "./assets/cover.webp";
import coverSmall from "./assets/cover_small.jpg";

const project: Project = {
  order: 20,
  isLocked: true,
  preview: cover,
  previewPlaceholder: coverSmall,
  label: "Adobe for Business Series Overview",
  title: "Adobe for Business Series Overview",
  subtitle: "B2B",
  tags: ["Branding", "B2B"],
  bioLines: [
    "During my internship at Skycar, I worked closely with the lead designer to develop visual assets for Adobe B2B campaign videos during a key brand evolution. My role focused on executing design iterations based on client feedback, ensuring every detail aligned with Adobe's brand guidelines.",
    "Since this was a huge overview series with over 5 imaginary brands, I worked with senior designers to build a Figma Master Library for social media and advertising channels to ensure a cohesive campaign.",
  ],
  details: [
    { label: "Role", value: "Design" },
    { label: "Software Used", value: "Figma, Illustrator, XD" },
  ],
  route: "/AdobeForBusiness",
  mediaUrls: [
    "https://player.vimeo.com/video/1211472916?h=f1a6018e50&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1211473598?h=7648ca7462&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1211474169?h=8c6ecdad05&title=0&byline=0&portrait=0",
    "https://player.vimeo.com/video/1211486008?h=3dc568fb08&title=0&byline=0&portrait=0",
  ],
  credits: (
    <>
      Client: Adobe
      <br />
      Production: Skycar Creative
      <br />
      Creative Leads: Jay Maude, Mel Ruiz
      <br />
      Design Director: Angela Wong
      <br />
      Designers: Yelim Lee, Sabrina Chen
      <br />
      Animators: James Curtis, Jeremy Carreron, Giedre Elliot (Ginger Fox)
    </>
  ),
};

export default project;
