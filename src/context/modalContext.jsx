import { createContext, useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import css from "./modalContext.module.css";
import Modal from "../../src/components/Modal/Modal";

export const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const backdropRef = useRef(null);
  const closeModal = useCallback((evt) => {
    if (
      (evt && evt.target === evt.currentTarget) ||
      (evt && evt.code === "Escape") ||
      (evt && evt.type === "submit")
    ) {
      document.body.style.overflow = "visible";
      if (backdropRef.current !== null) {
        backdropRef.current.style.opacity = 0;
      }
      setTimeout(() => {
        setModalContent(null);
      }, 700);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    const timer = setTimeout(() => {
      if (backdropRef.current === null) return;
      backdropRef.current.style.opacity = 1;
    }, 0);
    return () => {
      window.removeEventListener("keydown", closeModal);
      clearTimeout(timer);
    };
  }, [closeModal]);

  const openModal = (content) => {
    document.body.style.overflow = "hidden";
    setModalContent(content);
    setTimeout(() => {
      backdropRef.current.style.opacity = 1;
    }, 0);
  };

  return (
    <modalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div className={css.modalBackdrop} ref={backdropRef}>
            <Modal>{modalContent}</Modal>
          </div>,
          document.querySelector("#modal-root")
        )}
    </modalContext.Provider>
  );
};
