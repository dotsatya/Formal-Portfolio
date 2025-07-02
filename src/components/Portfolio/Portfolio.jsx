import React from "react";
import "../../App.css";
import clsx from "clsx";
import HoverCard from "./HoverCard";
import styles from "./Portfolio.module.css";
import Image1 from "../../assets/111.png";
import Image2 from "../../assets/112.png";
import Image3 from "../../assets/113.png";
import Image4 from "../../assets/114.png";
import Image5 from "../../assets/115.png";
import Image6 from "../../assets/netflix.png";
// import Image6  from "../../assets/116.png";

const cardData = [
  {
    id: 1,
    title: "Sun Earth Moon",
    description: "A pioneering project in the field of quantum computing.",
    imageUrl: Image1,
    imageWidth: 400,
    imageHeight: 300,
    // dataAiHint: "quantum computing",
    githubUrl: "https://github.com/dotsatya/Sun-Earth-Moon",
    liveUrl: "https://dotsatya.github.io/Sun-Earth-Moon/"
  },
  {
    id: 2,
    title: "Web Music Player",
    description: "Developing next-generation AI for personalized medicine.",
    imageUrl: Image4,
    imageWidth: 400,
    imageHeight: 500,
    // dataAiHint: "personalized medicine",
    githubUrl: "https://github.com/dotsatya/Music-Website",
    liveUrl: "https://dotsatya.github.io/Music-Website/"
  },
  {
    id: 3,
    title: "Event Management System",
    description: "Exploring sustainable energy solutions for urban environments.",
    imageUrl: Image3,
    imageWidth: 400,
    imageHeight: 400,
    // dataAiHint: "sustainable energy",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Simple Cricket Game",
    description: "Building a decentralized network for secure data exchange.",
    imageUrl: Image2,
    imageWidth: 400,
    imageHeight: 600,
    // dataAiHint: "secure network",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 5,
    title: "Netfix Clone",
    description: "Researching atmospheric carbon capture technologies...",
    imageUrl: Image6,
    imageWidth: 400,
    imageHeight: 450,
    // dataAiHint: "carbon capture",
    githubUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    liveUrl: "https://www.netflix.com/in/"
  },
  {
    id: 6,
    title: "ToDo App",
    description: "Innovating in augmented reality for educational purposes.",
    imageUrl: Image5,
    imageWidth: 400,
    imageHeight: 350,
    // dataAiHint: "augmented reality",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  // {
  //   id: 7,
  //   title: "Project Eta",
  //   description: "Creating accessible financial tools for emerging markets.",
  //   imageWidth: 400,
  //   imageHeight: 550,
  //   dataAiHint: "financial tools",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 8,
  //   title: "Project Theta",
  //   description: "Advancing robotics for automated logistics and delivery.",
  //   imageWidth: 400,
  //   imageHeight: 250,
  //   dataAiHint: "robotics logistics",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // }
];

const Portfolio = () => {
  return (
    <section className={clsx(styles.reviews, "container", "section")} id="portfolio">
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>Project Portfolio</h2>
        <span className={clsx(styles.section_subtitle)}>🧩 Showcase My Craft</span>
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

export default Portfolio;