import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Locked } from "../Locked/Locked";
import { routes } from "../../routes";
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
  mediaUrls = [],
  isLocked: isLockedProps = false,
  bioLines = [],
}: DetailProps) => {
  const navigate = useNavigate();
  const [processDialogOpen, setProcessDialogOpen] = React.useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(isLockedProps);

  const handleProcessClick = (img: string) => () => setProcessDialogOpen(img);
  const handleProcessDialogClose = () => setProcessDialogOpen(null);

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

          {mediaUrls.length > 0 &&
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Full Video</h3>
              <div className={styles["separator"]} />
              {mediaUrls.map((url) => (
                <div className={styles["embed-wrapper"]} key={`embed-wrapper-${url}`}>
                  <iframe
                    id="media-iframe"
                    title={label}
                    src={url}
                    className={styles["iframe-video"]}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          }

          {styleFrames.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Styleframes</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {styleFrames.map((url) => (
                  <div key={`animation-test-${url}`}>
                    <img
                      className={styles["animation-test"]}
                      src={url}
                      alt="animation test"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {animationTests.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Animation Test</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {animationTests.map((url) => (
                  <div key={`animation-test-${url}`}>
                    <img
                      className={styles["animation-test"]}
                      src={url}
                      alt="animation test"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {keyMoments.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Key Moments</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {keyMoments.map((url) => (
                  <div key={`key-moment-${url}`}>
                    <img
                      className={styles["key-moment"]}
                      src={url}
                      alt="key moment"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {process.length > 0 && (
            <div className={styles["section-wrapper"]}>
              <h3 className={styles["section-title"]}>Process</h3>
              <div className={styles["separator"]} />
              <div className={styles["cards-wrapper"]}>
                {process.map(({ img, desc }) => (
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
                      <img
                        className={styles["process"]}
                        src={img}
                        alt="process"
                      />
                    </button>
                    <small className={styles["process-desc"]}>{desc}</small>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Dialog
            open={Boolean(processDialogOpen)}
            onClose={handleProcessDialogClose}
            maxWidth={false}
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                boxShadow: "none",
                maxWidth: "none",
                margin: 0,
              },
            }}
            BackdropProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                backdropFilter: "blur(8px)",
              },
            }}
            onClick={handleProcessDialogClose}
          >
            <DialogContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                overflow: "hidden",
                "&:focus": { outline: "none" },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton
                aria-label="Close"
                onClick={handleProcessDialogClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "rgba(255, 255, 255, 0.87)",
                  zIndex: 1,
                }}
              >
                <CloseIcon />
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
            </DialogContent>
          </Dialog>
          <div className={styles["section-wrapper"]}>
            <h3 className={styles["section-title"]}>Credits</h3>
            <div className={styles["separator"]} />
            {credits}
          </div>
        </div >
      )}
    </>
  );
};

export default Detail;
