import type { Project } from "../../types";
import frame1 from "./assets/1_gif.gif";
import frame2 from "./assets/2_gif.gif";
import frame3 from "./assets/3_gif.gif";
import frame4 from "./assets/4_gif.gif";

const project: Project = {
  order: 50,
  label: "Kinetic Typography",
  preview: frame1,
  mediaUrls: ["https://player.vimeo.com/video/1087828815"],
  route: "/KineticTypography",
  title: (
    <>
      Kinetic Typography:
      <br />
      How Bad Do You Want Me (Lady Gaga)
    </>
  ),
  subtitle: "2D Motion Design",
  description: (
    <>
      To mirror the lyrics's defiant energy, I pushed the boundaries of
      experimental typography,
      <br />
      moving away from the 'good girl' aesthetic into a chaotic, high-octane
      visual identity.
      <br />
      The animation uses sharp shape-layer transitions to echo the
      unapologetic and obsessive nature of the lyrics.
    </>
  ),
  credits: <>Personal work</>,
  animationTests: [frame1, frame2, frame3, frame4],
};

export default project;
