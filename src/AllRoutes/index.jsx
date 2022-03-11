import Header from "../components/Header/index";
import { Route, Switch } from "react-router-dom";
import Card from "../components/Card/index";
import Cart from "../components/Cart";
import Dashboard from "../pages/Dashboard";
import CartPage from "../pages/CartPage";

const AllRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};
export default AllRoutes;
