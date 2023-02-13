import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  menuOpen: () => void;
  menuClose: () => void;
}

export const UiContext = createContext({} as ContextProps);
