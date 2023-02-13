import type { UIState } from "./uiProvider";

type UiActionType = { type: "[UI] menu open" } | { type: "[UI] menu close" };

export const uiReducer = (state: UIState, action: UiActionType): UIState => {
  switch (action.type) {
    case "[UI] menu open":
      return { ...state, isMenuOpen: true };
    case "[UI] menu close":
      return { ...state, isMenuOpen: false };
    default:
      return { ...state };
  }
};
