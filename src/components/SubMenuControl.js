import MenuButton from "./MenuButton";

export default function SubMenuControl({
  children,
  menuDispatch,
  routeTitle,
  subRouteView
}) {
  if (subRouteView !== routeTitle) {
    return (
      <div>
        <MenuButton
          styleAttrubute={{
            backgroundColor: "black",
            color: "white"
          }}
          clickAction={() =>
            menuDispatch({ type: "openSubMenu", menuName: routeTitle })
          }
        >
          Open
        </MenuButton>
      </div>
    );
  } else if (subRouteView === routeTitle) {
    return (
      <div
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <MenuButton
          styleAttrubute={{
            backgroundColor: "gray",
            color: "white"
          }}
          clickAction={() =>
            menuDispatch({ type: "openMainMenu", menuName: "close" })
          }
        >
          Close
        </MenuButton>
        {children}
      </div>
    );
  } else {
    return <p>{JSON.stringify(subRouteView)}</p>;
  }
}
