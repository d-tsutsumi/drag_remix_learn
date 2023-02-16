import { useReducer } from "react";
import { UiContext, uiReducer } from "./";
import type { ReactNode, FC } from "react";

export interface UIState {
  isMenuOpen: boolean;
  isDrag: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false,
  isDrag: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const menuOpen = () => {
    dispatch({ type: "[UI] menu open" });
  };
  const menuClose = () => {
    dispatch({ type: "[UI] menu close" });
  };
  const dragOn = () => {
    dispatch({ type: "[UI] drag on" });
  };
  const dragOff = () => {
    dispatch({ type: "[UI] drag off" });
  };
  return (
    <UiContext.Provider
      value={{ ...state, menuOpen, menuClose, dragOff, dragOn }}
    >
      {children}
    </UiContext.Provider>
  );
};
