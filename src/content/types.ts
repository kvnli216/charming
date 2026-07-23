import type { ReactNode } from "react";

export interface ProcessStep {
  img: string;
  desc: string;
}

export interface Project {
  /** Display order on the Work grid; lower sorts first. */
  order: number;
  /** Path this project's Detail page is served at, e.g. "/FallWinter". */
  route: string;
  /** Thumbnail shown on the Work grid card. */
  preview: string;
  /** Text shown on hover over the Work grid card, and iframe title on Detail. */
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  isLocked?: boolean;
  description?: ReactNode;
  bioLines?: ReactNode[];
  credits?: ReactNode;
  logo?: string;
  mediaUrls?: string[];
  keyMoments?: string[];
  process?: ProcessStep[];
  animationTests?: string[];
  styleFrames?: string[];
}
