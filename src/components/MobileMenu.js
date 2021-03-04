import MenuViewControl from "./MenuViewControl";
import MainMenu from "./MainMenu";

import { webpageRoutes } from "../websitePaths";
import { useMenuController } from "../hooks/useMenuController";

const initialMenuState = {
  isMobileMenuOpen: false,
  subRouteView: "close"
};

export default function MobileMenu() {
  /*
   controls menu visuablity. children of the MenuViewControl should be hidden
   if state is false
  */
  const [navMenuState, menuDispatch] = useMenuController(initialMenuState);

  return (
    <MenuViewControl
      isMobileMenuOpen={navMenuState.isMobileMenuOpen}
      menuDispatch={menuDispatch}
    >
      <MainMenu
        webpageRoutes={webpageRoutes.routes}
        navMenuState={navMenuState}
        menuDispatch={menuDispatch}
      />
    </MenuViewControl>
  );
}
