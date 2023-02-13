import { useReducer } from "react";
import { UiContext, uiReducer } from "./";
import type { ReactNode, FC } from "react";

export interface UIState {
  isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const menuOpen = () => {
    dispatch({ type: "[UI] menu open" });
  };
  const menuClose = () => {
    dispatch({ type: "[UI] menu close" });
  };
  return (
    <UiContext.Provider value={{ ...state, menuOpen, menuClose }}>
      {children}
    </UiContext.Provider>
  );
};
