import React, { Component, createContext, ReactNode } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import styles from "./modal.module.css";

type ModalContextType = {
  toggle: () => void;
  isOpen: boolean;
};

const ModalContext = createContext<ModalContextType | null>(null);

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

type ModalState = {
  isOpen: boolean;
};

export class Modal extends Component<ModalProps, ModalState> {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }

  toggle = () => {
    console.log("Toggling modal visibility. Current state:", this.state.isOpen);
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };  

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) return null;

    const contextValue = {
      toggle: this.toggle,
      isOpen,
    };

    return (
      <ModalContext.Provider value={contextValue}>
<div
  className={styles.overlay}
  onClick={(e) => {
    console.log("Overlay clicked");
    this.toggle();
  }}
>

          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </ModalContext.Provider>
    );
  }
}

export { ModalContext };
