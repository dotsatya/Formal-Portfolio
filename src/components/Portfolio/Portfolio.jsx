import React from "react";
import "../../App.css";
import clsx from "clsx";
import HoverCard from "./HoverCard";
import styles from "./Portfolio.module.css";
import Image1 from "../../assets/111.png";
import Image2 from "../../assets/112.png";
import Image3 from "../../assets/employee-Management-system.png";
import Image4 from "../../assets/114.png";
import Image5 from "../../assets/dotNotes.png";
import Image6 from "../../assets/dotCryptoChecker.png";
import Image7 from "../../assets/portfolio.png";
import Image8 from "../../assets/ecomarse.png";

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
    liveUrl: "https://dotsatya.github.io/Sun-Earth-Moon/",
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
    liveUrl: "https://dotsatya.github.io/Music-Website/",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "Exploring sustainable energy solutions for urban environments.",
    imageUrl: Image3,
    imageWidth: 400,
    imageHeight: 400,
    // dataAiHint: "sustainable energy",
    githubUrl: "https://github.com/dotsatya/Employee-Management-System",
    liveUrl: "https://dot-employee-management-system.vercel.app/",
  },
  {
    id: 4,
    title: "DotNotesNow📝",
    description: "Login and keep notes with after edit support...",
    imageUrl: Image5,
    imageWidth: 400,
    imageHeight: 350,
    // dataAiHint: "augmented reality",
    githubUrl: "https://github.com/dotsatya/DotNotesNow/",
    liveUrl: "https://dotnotesnow.vercel.app/",
  },
  {
    id: 5,
    title: "DotSkyNow🌤️ ",
    description:
      "Weather app with real-time forecasts, geolocation, and smooth animated theme switching.",
    imageUrl: Image2,
    imageWidth: 400,
    imageHeight: 600,
    // dataAiHint: "secure network",
    githubUrl: "https://github.com/dotsatya/DotSkyNow",
    liveUrl: "https://dotskynow.vercel.app/",
  },
  {
    id: 6,
    title: "📈 DotCryptoChecker",
    description:
      "A comprehensive Next.js cryptocurrency dashboard that provides real-time price updates, market insights, and interactive coin analysis.",
    imageUrl: Image6,
    imageWidth: 400,
    imageHeight: 450,
    // dataAiHint: "carbon capture",
    githubUrl: "https://github.com/dotsatya/DotCryptoChecker",
    liveUrl: "https://dotcryptochecker.vercel.app/",
  },

  {
    id: 7,
    title: "Satya // Portfolio",
    description: "My portfolio website.",
    imageUrl: Image7,
    imageWidth: 400,
    imageHeight: 550,
    // dataAiHint: "financial tools",
    githubUrl: "https://github.com/dotsatya/Formal-Portfolio",
    liveUrl: "https://satyasundardey-portfolio.vercel.app/",
  },
  {
    id: 8,
    title: "Ecomarse🛒",
    imageUrl: Image8,
    description: "A ecomarse website using next js.",
    imageWidth: 400,
    imageHeight: 250,
    // dataAiHint: "ecommerce platform",
    githubUrl: "https://github.com/dotsatya/ecomarse",
    liveUrl: "https://ecomarse-rust.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section
      className={clsx(styles.reviews, "container", "section")}
      id="portfolio"
    >
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}>Project Portfolio</h2>
        <span className={clsx(styles.section_subtitle)}>
          🧩 Showcase My Craft
        </span>
      </div>

      <div className={clsx(styles.pageWrapper)}>
        <main className={clsx(styles.main)}>
          <div className={clsx(styles.grid)}>
            {cardData.map((card) => (
              <HoverCard
                key={card.id}
                title={card.title}
                description={card.description}
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
