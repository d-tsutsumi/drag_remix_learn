import type { UIState } from "./uiProvider";

type UiActionType =
  | { type: "[UI] menu open" }
  | { type: "[UI] menu close" }
  | { type: "[UI] drag on" }
  | { type: "[UI] drag off" };

export const uiReducer = (state: UIState, action: UiActionType): UIState => {
  switch (action.type) {
    case "[UI] menu open":
      return { ...state, isMenuOpen: true };
    case "[UI] menu close":
      return { ...state, isMenuOpen: false };
    case "[UI] drag on":
      return { ...state, isDrag: true };
    case "[UI] drag off":
      return { ...state, isDrag: false };
    default:
      return { ...state };
  }
};
