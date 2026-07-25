import React from "react";
import styles from "./index.module.css";
import { Box, Drawer, IconButton, Tabs } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LuMail, LuMenu } from "react-icons/lu";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import VimeoIcon from "../../assets/VimeoIcon";
import { ColorModeButton } from "../../theme/color-mode";
import { routes } from "../../routes";

// TODO: skeleton load for reel

const NAV_ITEMS = [
  { route: "work", label: "Work" },
  { route: "play", label: "Fun" },
  { route: "about", label: "About" },
];

interface HeaderProps {
  isMobile: boolean;
}

const Header = ({ isMobile }: HeaderProps) => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.slice(1) : "home";

  const [open, setOpen] = React.useState(false);

  const handleOnTabChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className={styles["header-wrapper"]}>
            <Link className={styles["header-link"]} to={"/"}>
              <h2 className={styles["header-name"]}>Sabrina Chen</h2>
            </Link>
          </div>
          <div className={styles["menu-icon-wrapper"]}>
            <ColorModeButton />
            <IconButton
              className={styles["menu-button-toggle"]}
              aria-label="menu"
              variant="ghost"
              id="nav-menu"
              aria-controls={open ? "nav-drawer" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={() => setOpen(true)}
            >
              <LuMenu className={styles["menu-icon"]} />
            </IconButton>

            <Drawer.Root
              placement="end"
              open={open}
              onOpenChange={(details) => setOpen(details.open)}
            >
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content
                  id="nav-drawer"
                  width="calc(100svw / 2)"
                  bg="surface.panelDark"
                >
                  <Box as="nav" display="flex" flexDirection="column">
                    {NAV_ITEMS.map(({ route, label }) => (
                      <Box
                        key={route}
                        className={styles["list-item"]}
                        borderBottom="1px solid"
                        borderColor="border.onDark"
                        asChild
                      >
                        <Link
                          to={routes[route].path}
                          onClick={() => setOpen(false)}
                          className={styles["list-item-text"]}
                          aria-current={
                            routes[path]?.id === routes[route].id
                              ? "page"
                              : undefined
                          }
                        >
                          {label}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>
          </div>
        </>
      ) : (
        <>
          <div className={styles["header-wrapper"]}>
            <Link className={styles["header-link"]} to={"/"}>
              <h2 className={styles["header-name"]}>Sabrina Chen</h2>
            </Link>
          </div>
          <div className={styles["tabs-wrapper"]}>
            <Tabs.Root
              value={String(routes[path]?.id)}
              onValueChange={handleOnTabChange}
              variant="plain"
            >
              <Tabs.List gap="6">
                {NAV_ITEMS.map(({ route, label }) => (
                  <Tabs.Trigger
                    key={route}
                    value={String(routes[route].id)}
                    asChild
                    minW="0"
                    height="auto"
                    px="0"
                    py="0"
                    fontSize="bodySm"
                    fontWeight="medium"
                    color="fg.secondary"
                    _hover={{ color: "fg.primary" }}
                    _selected={{ color: "fg.primary", fontWeight: "semibold" }}
                  >
                    <Link to={routes[route].path}>{label}</Link>
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs.Root>
            <ColorModeButton marginInlineStart="6" />
          </div>
        </>
      )}
    </>
  );
};

const Footer = () => (
  <>
    <div>
      <IconButton
        asChild
        variant="ghost"
        className={styles["icon-link"]}
        aria-label="Instagram"
      >
        <a
          href="https://www.instagram.com/sabrina.art21/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram />
        </a>
      </IconButton>
      <IconButton
        asChild
        variant="ghost"
        className={styles["icon-link"]}
        aria-label="Email"
      >
        <a href="mailto:chen.chiamin16@gmail.com">
          <LuMail />
        </a>
      </IconButton>
      <IconButton
        asChild
        variant="ghost"
        className={styles["icon-link"]}
        aria-label="LinkedIn"
      >
        <a
          href="https://www.linkedin.com/in/sabrina-chiamin-chen-05609514b/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin />
        </a>
      </IconButton>
      <IconButton
        asChild
        variant="ghost"
        className={styles["icon-link"]}
        aria-label="Vimeo"
      >
        <a
          href="https://vimeo.com/user194145687"
          target="_blank"
          rel="noreferrer noopener"
        >
          <VimeoIcon />
        </a>
      </IconButton>
    </div>
    <div className={styles["footer-text"]}>Copyright © 2026 Sabrina Chen</div>
  </>
);

interface LayoutProps {
  isMobile: boolean;
}

const Layout = ({ isMobile }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles["header"]} ${isMobile && styles["mobile"]}`}>
        <Header isMobile={isMobile} />
      </div>
      <div className={styles.content}>
        <div
          className={`${styles["content-wrapper"]} ${isMobile && styles["mobile"]}`}
        >
          <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
