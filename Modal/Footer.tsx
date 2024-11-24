import React, { useContext } from "react";
import { ModalContext } from "./index";
import styles from "./modal.module.css";

type FooterProps = {
  callToActionLabel: string;
};

export const Footer: React.FC<FooterProps> = ({ callToActionLabel }) => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Footer must be used within a Modal");

  const handleCallToAction = () => {
    alert("OK");
    context.toggle();
  };

  return (
    <div className={styles.footer}>
      <button onClick={context.toggle}>Cancel</button>
      <button onClick={handleCallToAction}>{callToActionLabel}</button>
    </div>
  );
};
