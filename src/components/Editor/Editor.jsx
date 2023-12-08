import React, { useState } from "react";
import Styles from "./Editor.module.css";

export default function Editor({ sections }) {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        {Object.keys(sections).map((key) => (
          <div key={key} className={`${Styles.section} ${activeSectionKey === key ? Styles.active : ""}`} onClick={() => setActiveSectionKey(key)}>
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={Styles.body}></div>
    </div>
  );
}
