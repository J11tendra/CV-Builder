import React from "react";
import Styles from "../InputControl/InputControl.module.css";

export default function InputControl({ label, ...props }) {
  return (
    <div className={Styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}
