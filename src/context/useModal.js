import { useContext } from "react";
import { modalContext } from "./modalContext";

export const useModal = () => useContext(modalContext);
