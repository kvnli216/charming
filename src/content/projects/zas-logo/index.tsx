import type { Project } from "../../types";
import cover from "./assets/cover.gif";
import coverSmall from "./assets/cover_small.jpg";

const project: Project = {
  order: 70,
  label: "ZAS Logo",
  preview: cover,
  previewPlaceholder: coverSmall,
  route: "/ZASLogo",
  title: "ZAS Logo",
  mediaUrls: ["https://player.vimeo.com/video/925201010?h=f1ced0e468&title=0&byline=0&portrait=0"],
  subtitle: "Motion Design",
  credits: <>Credits: Personal work</>,
  keyMoments: [],
  process: [],
};

export default project;
