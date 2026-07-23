import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Layout from "./views/Layout";
import Work from "./views/Work";
import Illustration from "./views/Illustration";
import Reel from "./views/Reel";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/ThemeProvider";
import Detail from "./views/Detail";
import perfume_gif from "./assets/Works/handsonme/perfume_gif.gif";
import ZAS_logo from "./assets/Works/ZAS_logo.gif";
import TheBeautifulWay from "./assets/Works/TheBeautifulWay.gif";
import Fall_winter from "./assets/Works/fallwinter/Fall_winter.gif";
import fallWinterLogo from "./assets/Works/fallwinter/logo.png";
import TBWStyleFrame1 from "./assets/Works/tbw/TBW_gif1.gif";
import TBWStyleFrame2 from "./assets/Works/tbw/TBW_gif2.gif";
import TBWStyleFrame3 from "./assets/Works/tbw/TBW_gif3.gif";
import TBWStyleFrame4 from "./assets/Works/tbw/TBW_gif4.gif";
import handsStyleFrame1 from "./assets/Works/handsonme/1.png";
import handsStyleFrame2 from "./assets/Works/handsonme/2.png";
import handsStyleFrame3 from "./assets/Works/handsonme/3.png";
import handsStyleFrame4 from "./assets/Works/handsonme/4.png";
import handsStyleFrame5 from "./assets/Works/handsonme/5.png";
import handsStyleFrame6 from "./assets/Works/handsonme/6.png";
import kinetic1 from "./assets/Works/kinetictypography/1_gif.gif";
import kinetic2 from "./assets/Works/kinetictypography/2_gif.gif";
import kinetic3 from "./assets/Works/kinetictypography/3_gif.gif";
import kinetic4 from "./assets/Works/kinetictypography/4_gif.gif";
import Endshot from "./assets/Works/Endshot.gif";
import work_all from "./assets/project-works/all.webp";
import work_end from "./assets/project-works/end.webp";
import work_fall from "./assets/project-works/fall.webp";
import work_winter from "./assets/project-works/winter.webp";
import process_aefile from "./assets/project-process/process_aefile.jpg";
import process_c4d from "./assets/project-process/process_c4d.png";
import process_c4dmodel from "./assets/project-process/process_c4dmodel.png";
import process_storyboard from "./assets/project-process/process_storyboard.jpg";
import collegeboard_APDaily_cover from "./assets/project-works/collegeboard/APDaily_cover.gif";
import collegeboard_webp1_cafeorder from "./assets/project-works/collegeboard/webp1_cafeorder.webp";
import collegeboard_webp2_cafeorder from "./assets/project-works/collegeboard/webp2_cafeorder.webp";
import collegeboard_webp3_latin from "./assets/project-works/collegeboard/webp3_latin.webp";
import collegeboard_webp4_latin from "./assets/project-works/collegeboard/webp4_latin.webp";
import collegeboard_webp5_AFAM from "./assets/project-works/collegeboard/webp5_AFAM.webp";
import collegeboard_webp6_AFAM from "./assets/project-works/collegeboard/webp6_AFAM.webp";
import collegeboard_process1 from "./assets/project-process/collegeboard/process1.png";
import collegeboard_process2 from "./assets/project-process/collegeboard/process2.png";
import collegeboard_process3 from "./assets/project-process/collegeboard/process3_webp.webp";
import AdobeB2B_cover from "./assets/project-works/AdobeB2B_cover.webp";
import { useState } from "react";
import "./styles/fonts.css";

export const routes = {
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

export const DetailPages = [
  {
    isLocked: true,
    preview: collegeboard_APDaily_cover,
    label: "College Board AP Daily",
    title: "College Board AP Daily",
    subtitle: "Educational Courses",
    description: (
      <>
        <br />
        Visual production for a 17-month comprehensive project aimed at high
        school students across the U.S.
        <br />
        We produced 97 instructional videos (5-15 minutes each) spanning diverse
        subjects including
        <br />
        African American Studies, Latin, Biology, and Computer Science A (CSA).
        <br />
        My role focused on transforming complex academic frameworks into
        engaging motion graphics to enhance student learning.
        <br />
        Check out one of our full course here:{" "}
        <a
          href="https://reurl.cc/qKQ2Kq"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://reurl.cc/qKQ2Kq
        </a>
      </>
    ),
    route: "/CollegeBoardAPDaily",
    keyMoments: [
      collegeboard_webp1_cafeorder,
      collegeboard_webp2_cafeorder,
      collegeboard_webp3_latin,
      collegeboard_webp4_latin,
      collegeboard_webp5_AFAM,
      collegeboard_webp6_AFAM,
    ],
    process: [
      {
        img: collegeboard_process1,
        desc: 'Brainstorming in Figma: Simplified Boolean Expressions by using a "Cafe Order" analogy to make abstract logic intuitive.',
      },
      {
        img: collegeboard_process2,
        desc: "Employing a distraction-free visual style and clear diagrams to maximize learner focus on core concepts.",
      },
      {
        img: collegeboard_process3,
        desc: "Developing custom AE templates to ensure visual consistency and a cohesive animation style across the project.",
      },
    ],
    credits: (
      <>
        Director: Molly Shebeneck
        <br />
        Producers: Joey Ponce, Brigette Lopez, Mila Matveeva
        <br />
        Design Lead: Xiuqi Wang
        <br />
        Motion Designers: Sabrina Chen, Zichun Wang, Justin Dormitzer, Allen
        Cousett, Kai Yang
      </>
    ),
  },
  {
    isLocked: false,
    preview: AdobeB2B_cover,
    label: "Adobe for Business Series Overview",
    title: "Adobe for Business Series Overview | 2024",
    subtitle: "B2B",
    bioLines: [
      "During my internship at Skycar, I worked closely with the lead designer to develop visual assets for Adobe B2B campaign videos during a key brand evolution. My role focused on executing design iterations based on client feedback, ensuring every detail aligned with Adobe's brand guidelines.",
      "",
      <br />,
      "Since this was a huge overview series with over 5 imaginary brands, I worked with senior designers to build a Figma Master Library for social media and advertising channels to ensure a cohesive campaign.",
    ],
    route: "/AdobeForBusiness",
    mediaUrls: [
      "https://player.vimeo.com/video/1211472916?h=f1a6018e50",
      "https://player.vimeo.com/video/1211473598?h=7648ca7462",
      "https://player.vimeo.com/video/1211474169?h=8c6ecdad05",
      "https://player.vimeo.com/video/1211486008?h=3dc568fb08",
    ],
    credits: (
      <>
        Client: Adobe
        <br />
        Creative Leads: Jay Maude, Mel Ruiz
        <br />
        Design Director: Angela Wong
        <br />
        Designers: Yelim Lee, Sabrina Chen
        <br />
        Animators: James Curtis, Jeremy Carreon, Giedre Elliot (Ginger Fox)
      </>
    ),
  },
  {
    preview: Fall_winter,
    label: "Stepping Through the Seasons",
    title: "Stepping Through the Seasons",
    subtitle: "2D & 3D Motion Design",
    description: (
      <>
        We created a shoe apparel line, ZAS.
        <br />
        The campaign highlights how ZAS effortlessly adapts to changing seasons
        while remaining versatile and stylish.
      </>
    ),
    route: "/FallWinter",
    logo: fallWinterLogo,
    keyMoments: [work_fall, work_winter, work_all, work_end],
    process: [
      {
        img: process_storyboard,
        desc: "Initial sketching for storyboarding",
      },
      {
        img: process_c4d,
        desc: "Exploring footwear animation via Cinema 4D",
      },
      {
        img: process_aefile,
        desc: "Using After Effects to composite and animate graphics",
      },
      {
        img: process_c4dmodel,
        desc: "Using Cinema 4D to model the character and add the textures",
      },
    ],
    credits: (
      <>
        Motion Designers: Sabrina Chen, Harper Chung
        <br />
        Shoe Designer: Shunchun Hsieh (Check out his refine sketchbook:{" "}
        <a
          href="https://reurl.cc/QELRpp"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://reurl.cc/QELRpp
        </a>
        )
      </>
    ),
  },
  {
    label: "Hearts in Harmony",
    preview: perfume_gif,
    route: "/HeartsInHarmony",
    title: "Hands On Me",
    mediaUrls: [
      "https://player.vimeo.com/video/900298628?h=7d99a41d2c&byline=0",
    ],
    subtitle: "Motion Design",
    description: (
      <>
        This project is a personal motion design study for a conceptual perfume
        brand.
        <br />
        The goal was to translate the essence of romance and elegance into a
        captivating visual narrative.
        <br />
        By focusing on the interplay of the heart-shaped glass textures and
        fluid motion, I aimed to evoke a sense of allure and sophistication.
      </>
    ),
    credits: <>Credits: Personal work</>,
    styleFrames: [
      handsStyleFrame1,
      handsStyleFrame2,
      handsStyleFrame3,
      handsStyleFrame4,
      handsStyleFrame5,
      handsStyleFrame6,
    ],
    process: [],
  },
  {
    label: "Kinetic Typography",
    preview: kinetic1,
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
    animationTests: [kinetic1, kinetic2, kinetic3, kinetic4],
  },
  {
    label: "The Beautiful Way ",
    preview: TheBeautifulWay,
    route: "/TheBeautifulWay",
    title: "The Beautiful Way",
    subtitle: "Explainer Video",
    mediaUrls: ["https://player.vimeo.com/video/1073021266"],
    description: (
      <>
        This video translates the foundation’s commitment to inclusive,
        collaborative, and innovative healthcare into a clear, human-centered
        visual narrative.
        <br />
        Through cohesive motion and design,
        <br />
        we helped them communicates their vision of equitable and holistic
        well-being with clarity and impact.
      </>
    ),
    credits: (
      <>
        Collaboration with New View Media
        <br />
        Designer and Animator: Sabrina Chen
      </>
    ),
    animationTests: [
      TBWStyleFrame1,
      TBWStyleFrame2,
      TBWStyleFrame3,
      TBWStyleFrame4,
    ],
    process: [],
  },
  {
    label: "ZAS Logo",
    preview: ZAS_logo,
    route: "/ZASLogo",
    title: "ZAS Logo",
    mediaUrls: ["https://player.vimeo.com/video/925201010?h=f1ced0e468"],
    subtitle: "Motion Design",
    // description: (
    //   <>
    //     Logo animation for ZAS shoe apparel line.
    //   </>
    // ),
    credits: <>Credits: Personal work</>,
    keyMoments: [],
    process: [],
  },
  {
    label: "Stepping Through the Seasons",
    preview: Endshot,
    route: "/Endshot",
    title: "Stepping Through the Seasons",
    subtitle: "2D & 3D Motion Design",
    description: (
      <>
        We created a shoe apparel line, ZAS.
        <br />
        The campaign highlights how ZAS effortlessly adapts to changing seasons
        while remaining versatile and stylish.
      </>
    ),
    keyMoments: [work_fall, work_winter, work_all, work_end],
    process: [
      {
        img: process_storyboard,
        desc: "Initial sketching for storyboarding",
      },
      {
        img: process_c4d,
        desc: "Exploring footwear animation via Cinema 4D",
      },
      {
        img: process_aefile,
        desc: "Using After Effects to composite and animate graphics",
      },
      {
        img: process_c4dmodel,
        desc: "Using Cinema 4D to model the character and add the textures",
      },
    ],
    credits: (
      <>
        Motion Designers: Sabrina Chen, Harper Chung
        <br />
        Shoe Designer: Shunchun Hsieh (Check out his refine sketchbook:{" "}
        <a
          href="https://reurl.cc/QELRpp"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://reurl.cc/QELRpp
        </a>
        )
      </>
    ),
  },
  {
    // Stub to keep grid even
  },
];

function App() {
  const [windowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 430;
  const isMobile = windowWidth <= mobileBreakpoint;

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Routes>
          <Route element={<Layout isMobile={isMobile} />}>
            <Route
              path={routes.home.path}
              element={<Reel isMobile={isMobile} />}
            />
            <Route
              path={routes.reel.path}
              element={<Reel isMobile={isMobile} />}
            />
            <Route
              path={routes.work.path}
              element={<Work isMobile={isMobile} />}
            />
            <Route
              path={routes.play.path}
              element={<Illustration isMobile={isMobile} />}
            />
            <Route path={routes.about.path} element={<About />} />
            <Route path="*" element={"404 Page not found"} />
            {/* Detail Pages */}
            {DetailPages.map((props) => (
              <Route path={props.route} element={<Detail {...props} />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
