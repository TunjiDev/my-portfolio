import React from "react";
import ReactDOM from "react-dom";

import styles from "./ContactsModal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

function ContactsModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ContactsModal;
