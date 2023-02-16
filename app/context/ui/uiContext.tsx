import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  menuOpen: () => void;
  menuClose: () => void;
  isDrag: boolean
  dragOn: () => void;
  dragOff: () => void;
}

export const UiContext = createContext({} as ContextProps);
