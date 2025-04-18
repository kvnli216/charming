import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import Player from "@vimeo/player";

const Detail = ({
  label,
  mediaUrl,
  mediaUrl2,
  logo,
  styleframes = [],
  enableDetails = false,
  title,
  description,
  credits,
}) => {
  const handleTimeStamp = async (time) => {
    const player = new Player(document.getElementById("media-iframe"));
    await player.setCurrentTime(time);
    await player.play();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{label}</h1>
      </div>
      <div className={styles.content}>
        {(title && description) ?
          <div className={styles["desc-wrapper"]}>
            <div class={styles["title"]}>
              {title}
            </div>
            <div class={styles["description"]}>
              {description}
            </div>
            <div class={styles["credits"]}>
              {credits}
            </div>
          </div>
          : <></>
        }

        <div className={styles["embed-wrapper"]}>
          <iframe
            id="media-iframe"
            title={label}
            src={mediaUrl}
            className={styles["iframe-video"]}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>

        {mediaUrl2 &&
          <div className={styles["embed-wrapper"]}>
            <iframe
              id="media-iframe"
              title={label}
              src={mediaUrl2}
              className={styles["iframe-video"]}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            />
          </div>
        }

        {enableDetails && (
          <>
            <div className={styles["subtitle-wrapper"]}>
              <p>
                <span
                  className={styles["link"]}
                  onClick={() => handleTimeStamp(0)}
                >
                  00:00 - 00:04
                </span>{" "}
                Harper Chung in all aspects <br />
                <span
                  className={styles["link"]}
                  onClick={() => handleTimeStamp(4)}
                >
                  00:04 - 00:26
                </span>{" "}
                Sabrina Chen in all aspects <br />
                <span
                  className={styles["link"]}
                  onClick={() => handleTimeStamp(26)}
                >
                  00:26 - 00:51
                </span>{" "}
                Harper Chung in all aspects <br />
                <span
                  className={styles["link"]}
                  onClick={() => handleTimeStamp(52)}
                >
                  00:52 - 01:04
                </span>{" "}
                Sabrina Chen in all aspects
              </p>
            </div>
            <div className={styles["description-wrapper"]}>
              <h2>Why ZAS?</h2>
              <p>
                The voice of ZAS is dynamic, playful, and energetic. It is easy
                to remember and catchy. It represents the speed and smoothness
                that athletes feel when they do sports. We designed the bold,
                symmetric logo to make it good at showing the agility and
                fluidity that are important for sports.
              </p>
            </div>
            <div className={styles["media-wrapper"]}>
              <img className={styles["image"]} src={logo} alt="zas-logos" />
            </div>
          </>
        )}

        {styleframes.length !== 0 && (
          <div>
            <div className={styles['styleframe-header']}>
              <h2>Styleframes</h2>
            </div>
            <div className={styles["styleframe-wrapper"]}>
              {styleframes.map((src) => (
                <img src={src} alt="" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

Detail.propTypes = {
  label: PropTypes.string,
  mediaUrl: PropTypes.string,
};

export default Detail;
