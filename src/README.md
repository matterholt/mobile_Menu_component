# Mobile Navigation Component

Drop down Menu to navigate through a website or app. Component is somewhat modular and allow to add any number of routes and sub-routes to be displayed.

## Favorite Parts

- Link inputs are controlled by the websitePath.js. Able to display the main menu navigation and any sub-menu menus that are added.

- Sub-routes menus are control are individually by comparing the sub-route title and sub-route view. Sub-route view is set through custom hook here the sub-route title is set. Then will mount the sub-menu links

- Custom css styles are able to be applied to the common component to give them a individual feel. Styles can be past as a css class from the styles or an object that are created on the fly.

## Component descriptions

### MobileMenu Component

Top most component and serves as a mounting point to the mobile menu. Within the component the routes to the website is imported in. Not displayed but there is an option to filter the route by attributes, before the routes are past to the MainMenu component for rendering to screen. This component is the entry point of the menu state. The custom hook "useMenuController" is able control what get mounted and unmounted to the dom. At this level the initial state of the the menu is define, which should be menus all closed. Children components are the MenuViewControl and MainMenu

### MenuViewControl Component

This component is in the user input to control the mounting and un-mounting of the menu. Initially component only has a button mounted. when click updates the state of the 'isMobileMenuOpen' to true. The component will get re-rendered with the the open menu state. Which consists of a button to close the main menu and the children of the this component. Having this component controlling the mounting of the menu would only be evaluated once. Avoiding the need to pass the "isMenuOpen" prop to the view and one less component to the DOM.

    The process of component would be the "MobileMenu" would mount
    f the control did not mount the menu view then the component would still get mounted but would be evaluated to null since the the state would be set to false [example](https://codesandbox.io/s/compassionate-darwin-jqesh?file=/src/App.js)

### MainMenu Component

Main list onces mounted to the DOM the user is able to navigate through the website. At the root of the component simply maps through the webpage route prop and passes the individual item to the MenuItem component.

### MainItem Component

The component live in the MainMenu.js and performs the bulk of the work in the file. The component is mainly responsible for listing the links and passing the props to a Link component. Where the path and name are passed to the "LinkRoute" component. The menuDispatch is also pass to this component, so that when the link is clicked the menu state can close the menu. The secondary role is to mount the sub-menu if available. If a sub-route is defined in the websitePaths, then the component for the sub-menu can be mounted within the main menu li tag.

### SubMenu

At the root of this component is set up very similar to the MainMenu component. There are two children one is the SubMenuControl for the mounting and un-mounting the sub-menu and the other are the SubMenuItems to render the items to the DOM. Like the MainMenu component the SubMenuItems are actually are children of the SubMenControl.

### SubMenuControl

The sub-menu is contains much like the MainMenuControl, but the determining factor of whether the component is mounted or not, is set by the subRouteView and the routeTitle are matching or not. The subRouteView is set by the menuDispatch and when the onClick is activated the action type of "openSubMenu". This action type triggers the opening of the sub-menu but there is a need for an another item sent to the useMenuControl is a "menuName". The "menuName" will determine what sub-menu should be mounted.

### SubMenuItems

This component will map through the array of sub-menus and setting them in a list tag.

## TODO / Improvements

- change the main menu control to a string instead of a bool. open the opportunity to multiple menus
- add attributes that would depict orientation of the menu vertical, left, horizontal, etc.
- Give some animation
- Have color scheme define in a context allowing ease of customization
- Utilize the route attributes,
- Create a custom hook when clicked outside of menu
- Add an actual routeing with react router
