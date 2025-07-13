import React from "react";
import "../../App.css";
import clsx from "clsx";
import HoverCard from "./HoverCard";
import styles from "./Photograohy.module.css";
// import Image1 from "../../assets/111.png";

const cardData = [
  {
    id: 1,
    imageUrl: "https://www.instagram.com/p/CxSBeljxoZX/?igsh=MWpzM3JuOXNqcmM5aQ=="
  },
  {
    id: 2,
    imageUrl: "https://www.instagram.com/p/CxSBeljxoZX/?igsh=MWpzM3JuOXNqcmM5aQ=="
  }, {
    id: 3,
    imageUrl: "https://www.instagram.com/p/CxSBeljxoZX/?igsh=MWpzM3JuOXNqcmM5aQ=="
  },
  {
    id: 4,
    imageUrl: "https://www.instagram.com/p/CxSBeljxoZX/?igsh=MWpzM3JuOXNqcmM5aQ=="
  },
];

const Photograohy = () => {
  return (
    <section className={clsx(styles.reviews, "container", "section")} id="portfolio">
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>My Passion Beyond Code</h2>
        <span className={clsx(styles.section_subtitle)}>📷 Capturing Moments Through My Lens</span>
      </div>

      <div className={clsx(styles.pageWrapper)}>
        <main className={clsx(styles.main)}>

          <div className={clsx(styles.grid)}>
            {cardData.map((card) => (
              <HoverCard
                key={card.id}
                title={card.title}
                description={card.description}
                // imageUrl={`https://placehold.co/${card.imageWidth}x${card.imageHeight}.png`}
                imageUrl={card.imageUrl}
                imageWidth={card.imageWidth}
                imageHeight={card.imageHeight}
                dataAiHint={card.dataAiHint}
                githubUrl={card.githubUrl}
                liveUrl={card.liveUrl}
              />
            ))}
          </div>
        </main>
      </div>
    </section>

  );
};

export default Photograohy;