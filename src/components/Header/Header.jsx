import React from "react";
import resumeSvg from "../../assets/resume.svg";
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <p className={Styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={Styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={Styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}
