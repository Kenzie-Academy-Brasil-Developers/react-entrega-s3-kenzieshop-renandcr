import { Route, Switch } from "react-router-dom";
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
