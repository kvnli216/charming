import type { Project } from "./types";

const modules = import.meta.glob<{ default: Project }>("./projects/*/index.tsx", {
  eager: true,
});

export const projects: Project[] = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => a.order - b.order);
