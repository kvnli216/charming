import type { ReactNode } from "react";

/** An image plus its tiny low-res stand-in, shown blurred-up behind it while it loads. */
export interface MediaAsset {
  src: string;
  placeholder?: string;
}

export interface ProcessStep {
  img: string;
  placeholder?: string;
  desc: string;
}

/** Reference media for a ProcessMilestone. `src`/`placeholder` are omitted until real assets land — the ProcessTimeline component renders a plain pulsing skeleton in their absence. */
export interface ProcessMedia {
  type: "gallery" | "hero";
  /** Gallery tile count. Ignored for type "hero". */
  tiles?: number;
  src?: string;
  placeholder?: string;
}

/** A single step in the ProcessTimeline module (vertical/selectable milestone timeline), grouped by `phase`. */
export interface ProcessMilestone {
  phase: string;
  title: string;
  description: ReactNode;
  tags?: string[];
  media: ProcessMedia;
}

/** A label/value pair shown in the Detail page sidebar, e.g. Role, Software Used. */
export interface ProjectDetail {
  label: string;
  value: ReactNode;
}

/** A description block paired with its own key moments grid, for projects covering multiple subjects (e.g. two courses). Rendered in place of `description`/`keyMoments`. */
export interface ProjectSection {
  description?: ReactNode;
  keyMoments?: MediaAsset[];
}

export interface Project {
  /** Display order on the Work grid; lower sorts first. */
  order: number;
  /** Path this project's Detail page is served at, e.g. "/FallWinter". */
  route: string;
  /** Thumbnail shown on the Work grid card. */
  preview: string;
  /** Tiny low-res stand-in for `preview`, shown blurred-up behind it while it loads. */
  previewPlaceholder?: string;
  /** Text shown on hover over the Work grid card, and iframe title on Detail. */
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Extra pill tags shown on the Work grid card, alongside the subtitle. */
  tags?: string[];
  isLocked?: boolean;
  description?: ReactNode;
  /** Facts shown in a sidebar beside the description, e.g. Role, Software Used. When present, the header switches to a two-column layout. */
  details?: ProjectDetail[];
  /** Multiple description + key-moments blocks rendered in sequence, for projects covering distinct subjects. Takes precedence over `description`/`keyMoments` when present. */
  sections?: ProjectSection[];
  bioLines?: ReactNode[];
  credits?: ReactNode;
  logo?: string;
  /** Single video/embed URL rendered like `mediaUrls`, but without a section title or separator. */
  trailer?: string;
  mediaUrls?: string[];
  keyMoments?: MediaAsset[];
  process?: ProcessStep[];
  /** Milestones for the ProcessTimeline module. Takes precedence over `process` when present. */
  processTimeline?: ProcessMilestone[];
  animationTests?: MediaAsset[];
  styleFrames?: MediaAsset[];
}
