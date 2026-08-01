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
  mediaUrls: ["/video/zas-logo/zas-logo.mp4"],
  subtitle: "Motion Design",
  credits: <>Credits: Personal work</>,
  keyMoments: [],
  process: [],
};

export default project;
