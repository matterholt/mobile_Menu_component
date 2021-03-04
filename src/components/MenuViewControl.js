import MenuButton from "./MenuButton";

// default for main buttons for nav menu
// capable to add custom style at componet level
const mainButtonDefault = {
  width: "150px",
  padding: "10px",
  backgroundColor: "#b9b9b9"
};

// Control when the navigation menu is mounted or not..
export default function MenuViewControl({
  children,
  isMobileMenuOpen,
  menuDispatch
}) {
  if (!isMobileMenuOpen) {
    return (
      <MenuButton
        styleAttrubute={{
          fontWeight: 900,
          color: "green",
          ...mainButtonDefault
        }}
        clickAction={() => menuDispatch({ type: "openMainMenu" })}
      >
        MENU
      </MenuButton>
    );
  }
  if (isMobileMenuOpen) {
    return (
      <div style={{ position: "relative" }}>
        <MenuButton
          styleAttrubute={{
            ...mainButtonDefault,
            fontWeight: 500,
            color: "#fff",
            backgroundColor: "#686868"
          }}
          clickAction={() => menuDispatch({ type: "closeMenus" })}
        >
          CLOSE
        </MenuButton>
        {children}
      </div>
    );
  } else {
    return null;
  }
}
