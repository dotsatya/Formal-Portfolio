import React from "react";
import clsx from "clsx";
import styles from "./Home.module.css"; // <-- Add this line
import "../../App.css";

const ScrollDown = () => {
  return (
    <div className={clsx(styles.home_scroll)}>
      <a
        href="#about"
        className={clsx(styles.home_scroll_button, "button_flex")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="32px"
          height="32px"
          className={clsx(styles.home_scrollmouse)}
          viewBox="0 0 247 390"
          version="1.1"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
          }}
        >
          <path
            className={styles.wheel}
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "#808080",
              strokeWidth: "20px",
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "#404040",
              strokeWidth: "20px",
            }}
          />
        </svg>
        <span className={styles.home_scroll_name}>Scroll Down</span>
        <i className={`uil uil-arrow-down ${styles.home_scroll_arrow}`}></i>
      </a>
    </div>
  );
};

export default ScrollDown;
