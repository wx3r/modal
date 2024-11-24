import React, { useContext } from "react";
import { ModalContext } from "./index";
import styles from "./modal.module.css";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Header must be used within a Modal");

  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <button onClick={context.toggle} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
};
