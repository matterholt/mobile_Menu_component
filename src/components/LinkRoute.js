// able to use the link components for the main routes and the sub-routes

const LinkRoute = ({ menuDispatch, name, path, styleAttrubute = null }) => {
  const styleType = typeof styleAttrubute === Object;
  const objectClass = styleType ? styleAttrubute : null;
  const classStyle = typeof styleAttrubute === "string";
  const childClass = classStyle ? styleAttrubute : "";

  return (
    <a href={path} className="link_href">
      <button
        style={objectClass}
        className={`link_button ${childClass}`}
        type="button"
        onClick={() => menuDispatch({ type: "closeMenus" })}
      >
        {name}
      </button>
    </a>
  );
};

export default LinkRoute;
