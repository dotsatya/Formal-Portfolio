import React from "react";
import clsx from "clsx";
import styles from "./Skills.module.css";

const GraphicsDesigner = () => {
  return (
    <div className={clsx(styles.skills_content, "grid")}>
      <h3 className={clsx(styles.skills_title )}>Graphics Designer</h3>

      <div className={clsx(styles.skills_box, "grid")}>
        <div className={clsx(styles.skills_group)}>
          <div className={clsx(styles.skills_data)}>
            <i className={clsx("bx", "bx-badge-check", styles.badgeIcon)}></i>
            <div>
              <h3 className={clsx(styles.skills_name)}>Photoshop</h3>
              <span className={clsx(styles.skills_level)}>Intermediate</span>
            </div>
          </div>

          <div className={clsx(styles.skills_data)}>
            <i className={clsx("bx", "bx-badge-check", styles.badgeIcon)}></i>
            <div>
              <h3 className={clsx(styles.skills_name)}>Illustrator</h3>
              <span className={clsx(styles.skills_level)}>Intermediate</span>
            </div>
          </div>

          <div className={clsx(styles.skills_data)}>
            <i className={clsx("bx", "bx-badge-check", styles.badgeIcon)}></i>
            <div>
              <h3 className={clsx(styles.skills_name)}>Premiere Pro</h3>
              <span className={clsx(styles.skills_level)}>Basic</span>
            </div>
          </div>

        </div>

        <div className={clsx(styles.skills_group)}>
          <div className={clsx(styles.skills_data)}>
            <i className={clsx("bx", "bx-badge-check", styles.badgeIcon)}></i>
            <div>
              <h3 className={clsx(styles.skills_name)}>Filmora</h3>
              <span className={clsx(styles.skills_level)}>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesigner;
