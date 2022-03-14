import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CartPage from "../pages/CartPage";

import Login from "../components/Login/index";

const AllRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
export default AllRoutes;
