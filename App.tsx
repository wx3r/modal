import React from "react";
import { Modal } from "./Modal";
import "./App.css";

type AppState = {
  isModalOpen: boolean;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="App">
        <h1>Modal</h1>
        <button onClick={this.toggleModal}>Otwórz Modal</button>

        <Modal isOpen={isModalOpen}>
          <Modal.Header title="Modal Title" />
          <Modal.Content>
            <p>This is the content of the modal.</p>
          </Modal.Content>
          <Modal.Footer callToActionLabel="Confirm" />
        </Modal>
      </div>
    );
  }
}

export default App;
