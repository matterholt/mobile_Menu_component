// Button to open and close menus mains and sub-menu

const MenuButton = ({ children, clickAction, styleAttrubute }) => (
  <button
    className="navMenu__button"
    style={styleAttrubute}
    onClick={clickAction}
  >
    {children}
  </button>
);

export default MenuButton;
