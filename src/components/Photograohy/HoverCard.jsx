import React from "react";
import clsx from "clsx";
import styles from "./Photograohy.module.css";
import { Eye, Github } from "lucide-react";

const HoverCard = ({
  title,
  description,
  imageUrl,
  imageHeight,
  imageWidth,
  dataAiHint,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className={clsx(styles.card, "group")}>
      <img
        src={imageUrl}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        data-ai-hint={dataAiHint}
        className={clsx(styles.image)}
      />

      <div className={styles.gradientOverlay}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>

    
    </div>
  );
};

export default HoverCard;
