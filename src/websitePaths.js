const blogRoutes = {
  routeTitle: "blogSubRoutes",
  routes: [
    {
      id: 501,
      image: "/mainImg/applyMakeupOthers.jpg",
      path: "/blog",
      tag: "clean_beauty",
      title: "Clean Beauty",
      attribute: "blogFilter"
    },
    {
      id: 502,
      image: "/mainImg/coffee.jpg",
      path: "/blog",
      tag: "lifestyle",
      title: "Lifestyle",
      attribute: "blogFilter"
    },
    {
      id: 503,
      image: "/mainImg/bowlFood.jpg",
      path: "/blog",
      tag: "recipes",
      title: "Recipes",
      attribute: "blogFilter"
    },
    {
      id: 504,
      image: "/mainImg/applyMakeupSelf.jpg",
      path: "/blog",
      tag: "safe_products",
      title: "Safe Products",
      attribute: "blogFilter"
    }
  ]
};

const shopRoutes = {
  routeTitle: "shopSubRoutes",
  routes: [
    {
      id: 301,
      image: "/mainImg/applyMakeupOthers.jpg",
      path: "/shop",
      tag: "new_itmes",
      title: "New Items",
      attribute: "shopFilter"
    }
  ]
};

const webpageRoutes = {
  routeTitle: "mainSiteMap",
  routes: [
    {
      id: 0,
      path: "/",
      title: "Home",
      attribute: "home"
    },
    {
      id: 100,
      path: "/services",
      title: "Services",
      attribute: "primary"
    },
    {
      id: 200,
      path: "/about",
      title: "About",
      attribute: "primary"
    },
    {
      id: 300,
      path: "/shop",
      title: "Shop",
      attribute: "secondary",
      subRoutes: shopRoutes
    },
    {
      id: 400,
      path: "/opportunity",
      title: "Opportunity",
      attribute: "secondary"
    },
    {
      id: 500,
      path: "/blog",
      title: "Blog",
      attribute: "primary",
      subRoutes: blogRoutes
    },
    {
      id: 600,
      path: "/contact",
      title: "contact",
      attribute: "secondary"
    }
  ]
};

export { webpageRoutes };
