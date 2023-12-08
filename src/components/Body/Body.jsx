import React from "react";
import { ArrowDown } from "feather-icons-react";

import Editor from "../Editor/Editor";

import Styles from "./Body.module.css";

export default function Body() {
  const colors = ["black", "red", "magenta", "green", "purple"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>Resume Builder</div>
      <div className={Styles.toolbar}>
        <div className={Styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={Styles.color}
            ></span>
          ))}
        </div>
        <button>
          Download
          <ArrowDown />
        </button>
      </div>
      <div className={Styles.main}>
        <Editor sections={sections} />
      </div>
    </div>
  );
}
