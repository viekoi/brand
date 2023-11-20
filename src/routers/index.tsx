import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/main-layout";
import ProductDetails from "../views/products/product-details";
import CartView from "../views/cart";
import HomeView from "../views/home";
import CategoryView from "../views/categories";
import SearchView from "../views/search";

const pageRoutes = [
  {
    layout: MainLayout,
    routes: [
      {
        element: HomeView,
        path: "/",
      },
      {
        element: ProductDetails,
        path: "/products/:id",
      },
      {
        element: CartView,
        path: "/cart",
      },
      {
        element: CategoryView,
        path: "/categories/:id",
      },
      {
        element: SearchView,
        path: "/search",
      },
    ],
  },
];

const PageRouter = () => {
  return (
    <Routes>
      {pageRoutes.map((layout, index) => {
        return (
          <Route key={index} element={<layout.layout />}>
            {layout.routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default PageRouter;
