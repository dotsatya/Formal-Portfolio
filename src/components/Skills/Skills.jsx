import React from "react";
import "../../App.css";
import clsx from "clsx";
import styles from "./Skills.module.css"; // Adjust the path as necessary
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";
import Infinite_scroll from "./Infinite_scroll.jsx"

import useInView from "../hooks/useInView";
import GraphicsDesigner from "./GraphicsDesigner.jsx";

const Skills = () => {
  const [titleRef, titleVisible] = useInView();
  const [imgRef, imgVisible] = useInView();
  const [dataRef, dataVisible] = useInView();

  return (
    <section className={clsx(styles.skills, "section")} id="skills">
      <div className={clsx(styles.section_titlebar)}>
        <h2 className={clsx(styles.section_title)}> My Key Skills</h2>
        <span className={clsx(styles.section_subtitle)}>
         🤝 What I Bring to the Table
        </span>
      </div>
      <div className={clsx(styles.skills_container, "container", "grid")}>
        <Frontend />
        <Backend />
        <GraphicsDesigner />
      </div>

        <Infinite_scroll />


    </section>
  );
};
export default Skills;
