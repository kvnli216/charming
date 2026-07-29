import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { Dialog, IconButton } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { Locked } from "../Locked/Locked";
import { routes } from "../../routes";
import SkeletonMedia from "../../components/SkeletonMedia";
import type { Project } from "../../content/types";

interface DetailProps extends Project {
  isMobile?: boolean;
}

const Detail = ({
  title,
  subtitle,
  description,
  credits,
  label,
  isMobile,
  keyMoments = [],
  process = [],
  animationTests = [],
  styleFrames = [],
  trailer,
  mediaUrls = [],
  isLocked: isLockedProps = false,
  bioLines = [],
}: DetailProps) => {
  const navigate = useNavigate();
  const [processDialogOpen, setProcessDialogOpen] = React.useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(isLockedProps);

  const handleProcessClick = (img: string) => () => setProcessDialogOpen(img);
  const handleProcessDialogClose = () => setProcessDialogOpen(null);

  const renderEmbed = (url: string) => (
    <div className={styles["embed-wrapper"]} key={`embed-wrapper-${url}`}>
      {url.endsWith(".mp4") ? (
        <div className={styles["video-frame"]}>
          <SkeletonMedia
            placeholder={url.replace(/\.mp4$/, "-poster-small.jpg")}
            style={{ position: "absolute", inset: 0 }}
          >
            <video
              className={styles["full-video"]}
              controls
              preload="metadata"
              poster={url.replace(/\.mp4$/, "-poster.jpg")}
              playsInline
            >
              <source src={url} type="video/mp4" />
            </video>
          </SkeletonMedia>
        </div>
      ) : (
        <iframe
          id="media-iframe"
          title={label}
          src={url}
          className={styles["iframe-video"]}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );

  const handleGoBack = () => {
    navigate(routes.work.path);
  };

  const handleUnlock = () => {
    setIsLocked(false);
  };

  const Bio = () => {
    return (
      <div>
        {bioLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    );
  };

  return (
    <>
      {isLocked ? (
        <Locked handleBack={handleGoBack} onUnlock={handleUnlock} />
      ) : (
        <div
          className={`${styles["container"]} ${isMobile && styles["mobile"]}`}
        >
          <div className={styles["header"]}>
            <div className={styles["title"]}>
              <h2>{title}</h2>
              <h3 className={styles["sub-title"]}>{subtitle}</h3>
            </div>
            <div className={styles["description"]}>{bioLines.length > 0 ? <Bio /> : description}</div>
          </div>

          {trailer &&
            <div className={styles["section-wrapper"]}>
              {renderEmbed(trailer)}
            </div>
          }

          {mediaUrls.length > 0 &&
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Full Video</h3>
              <div className={styles["separator"]} />
              {mediaUrls.map(renderEmbed)}
            </div>
          }

          {styleFrames.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Styleframes</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {styleFrames.map(({ src, placeholder }) => (
                  <SkeletonMedia
                    key={`style-frame-${src}`}
                    placeholder={placeholder}
                    className={styles["animation-test"]}
                  >
                    <img src={src} alt="style frame" />
                  </SkeletonMedia>
                ))}
              </div>
            </div>
          )}

          {animationTests.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Animation Test</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {animationTests.map(({ src, placeholder }) => (
                  <SkeletonMedia
                    key={`animation-test-${src}`}
                    placeholder={placeholder}
                    className={styles["animation-test"]}
                  >
                    <img src={src} alt="animation test" />
                  </SkeletonMedia>
                ))}
              </div>
            </div>
          )}

          {keyMoments.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Key Moments</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {keyMoments.map(({ src, placeholder }) => (
                  <SkeletonMedia
                    key={`key-moment-${src}`}
                    placeholder={placeholder}
                    className={styles["key-moment"]}
                  >
                    <img src={src} alt="key moment" />
                  </SkeletonMedia>
                ))}
              </div>
            </div>
          )}

          {process.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Process</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {process.map(({ img, placeholder, desc }) => (
                  <div
                    className={styles["process-wrapper"]}
                    key={`process-${img}`}
                  >
                    <button
                      type="button"
                      className={styles["process-button"]}
                      onClick={handleProcessClick(img)}
                      aria-label="View process image full size"
                    >
                      <SkeletonMedia placeholder={placeholder} className={styles["process-frame"]}>
                        <img
                          className={styles["process"]}
                          src={img}
                          alt="process"
                        />
                      </SkeletonMedia>
                    </button>
                    <small className={styles["process-desc"]}>{desc}</small>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Dialog.Root
            open={Boolean(processDialogOpen)}
            onOpenChange={(details) => {
              if (!details.open) handleProcessDialogClose();
            }}
          >
            <Dialog.Backdrop bg="surface.overlay" backdropFilter="blur(8px)" />
            <Dialog.Positioner onClick={handleProcessDialogClose}>
              <Dialog.Content
                bg="transparent"
                boxShadow="none"
                maxWidth="none"
                margin="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="2"
                overflow="hidden"
                _focus={{ outline: "none" }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconButton
                  aria-label="Close"
                  onClick={handleProcessDialogClose}
                  variant="ghost"
                  position="absolute"
                  right="2"
                  top="2"
                  color="fg.onDark"
                  _hover={{ bg: "whiteAlpha.200" }}
                  zIndex="1"
                >
                  <LuX />
                </IconButton>
                {processDialogOpen && (
                  <img
                    src={processDialogOpen}
                    alt="Process (full size)"
                    style={{
                      maxWidth: "95vw",
                      maxHeight: "95vh",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    onClick={(e) => e.stopPropagation()}
                    draggable={false}
                  />
                )}
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Root>
          <div className={styles["section-wrapper"]}>
            <h3 className={styles["section-title"]}>Credits</h3>
            <div className={styles["separator"]} />
            <div className={styles["credits"]}>{credits}</div>
          </div>
        </div >
      )}
    </>
  );
};

export default Detail;
