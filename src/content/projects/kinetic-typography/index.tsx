import type { Project } from "../../types";
import frame1 from "./assets/1_gif.gif";
import frame1Small from "./assets/1_gif_small.jpg";
import frame2 from "./assets/2_gif.gif";
import frame2Small from "./assets/2_gif_small.jpg";
import frame3 from "./assets/3_gif.gif";
import frame3Small from "./assets/3_gif_small.jpg";
import frame4 from "./assets/4_gif.gif";
import frame4Small from "./assets/4_gif_small.jpg";

const project: Project = {
  order: 50,
  label: "Kinetic Typography",
  preview: frame1,
  previewPlaceholder: frame1Small,
  mediaUrls: ["https://player.vimeo.com/video/1087828815?title=0&byline=0&portrait=0"],
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
  animationTests: [
    { src: frame1, placeholder: frame1Small },
    { src: frame2, placeholder: frame2Small },
    { src: frame3, placeholder: frame3Small },
    { src: frame4, placeholder: frame4Small },
  ],
};

export default project;
