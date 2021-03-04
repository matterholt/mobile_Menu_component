import { useReducer } from "react";

function menuReducer(state, action) {
  switch (action.type) {
    case "openSubMenu":
      return { isMobileMenuOpen: true, subRouteView: action.menuName };
    case "openMainMenu":
      return { isMobileMenuOpen: true, subRouteView: "close" };
    case "closeMenus":
      return { isMobileMenuOpen: false, subRouteView: "close" };
    default:
      throw Error("action undefined");
  }
}

function useMenuController(initialState) {
  // hook to control the top navigation menus for mobile and desktop
  const [state, dispatch] = useReducer(menuReducer, initialState);

  return [state, dispatch];
}

export { useMenuController };
