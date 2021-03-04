import LinkRoute from "./LinkRoute";
import SubMenuControl from "./SubMenuControl";

//link are mocked up, and should be modified
const SubItem = ({ sublink, menuDispatch }) => (
  <LinkRoute
    name={sublink.title}
    path={`#${sublink.path}?=${sublink.tag}`}
    menuDispatch={menuDispatch}
    styleAttrubute={"subMenu__item"}
  />
);

const subMenuItem__container = { position: "absolute", top: 0, left: 43 };
const SubMenuItems = ({ routes, menuDispatch }) => (
  <ul style={subMenuItem__container}>
    {routes.map((sublink) => (
      <li>
        <SubItem
          key={sublink.id}
          sublink={sublink}
          menuDispatch={menuDispatch}
        />
      </li>
    ))}
  </ul>
);

export default function SubMenu({ menuDispatch, subroutes, subRouteView }) {
  const { routeTitle, routes } = subroutes;
  return (
    <SubMenuControl
      menuDispatch={menuDispatch}
      routeTitle={routeTitle}
      subRouteView={subRouteView}
    >
      <SubMenuItems routes={routes} menuDispatch={menuDispatch} />
    </SubMenuControl>
  );
}
