export interface RouteEntry {
  id: number;
  path: string;
}

export const routes: Record<string, RouteEntry> = {
  home: {
    id: 0, // id should match the desired route id (e.g. reel = 0)
    path: "/",
  },
  reel: {
    id: 0,
    path: "/reel",
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
