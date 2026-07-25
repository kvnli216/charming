export interface RouteEntry {
  id: number;
  path: string;
}

export const routes: Record<string, RouteEntry> = {
  home: {
    id: -1, // not represented in the nav tabs, so it never falsely highlights another tab
    path: "/",
  },
  work: {
    id: 1,
    path: "/work",
  },
  play: {
    id: 2,
    path: "/play",
  },
  about: {
    id: 3,
    path: "/about",
  },
};
