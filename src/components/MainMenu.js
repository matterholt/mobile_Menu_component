import SubMenu from "./SubMenu";
import LinkRoute from "./LinkRoute";

const MenuItem = ({ link, menuDispatch, subRouteView }) => {
  return (
    <li style={{ display: "flex", width: 150 }}>
      <LinkRoute
        name={link.title.toUpperCase()}
        path={`#${link.path}`}
        menuDispatch={menuDispatch}
      />
      {link.subRoutes ? (
        <SubMenu
          menuDispatch={menuDispatch}
          subroutes={link.subRoutes}
          subRouteView={subRouteView}
        />
      ) : null}
    </li>
  );
};

export default function MainMenu({
  navMenuState,
  menuDispatch,
  webpageRoutes
}) {
  const { subRouteView } = navMenuState;

  return (
    <ul style={{ position: "absolute", top: 35 }}>
      {webpageRoutes.map((link) => {
        return (
          <MenuItem
            key={link.id}
            link={link}
            subRouteView={subRouteView}
            menuDispatch={menuDispatch}
          />
        );
      })}
    </ul>
  );
}
