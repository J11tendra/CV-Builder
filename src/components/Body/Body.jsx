import React from 'react';
import { ArrowDown } from "feather-icons-react";
import Styles from "./Body.module.css";

export default function Body() {
  const colors = ["black", "red", "magenta", "green", "purple"];

  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>Resume Builder</div>
      <div className={Styles.toolbar}>
        <div className={Styles.colors}>
            {colors.map((item) => (
                <span key={item} style={{ backgroundColor: item }} className={Styles.color}></span>
            ))}
        </div>
        <button>Download<ArrowDown /></button>
      </div>
    </div>
  );
}
