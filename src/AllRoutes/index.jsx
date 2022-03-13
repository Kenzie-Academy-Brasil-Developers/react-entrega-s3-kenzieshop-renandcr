import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CartPage from "../pages/CartPage";

import Login from "../components/Login/index";

const AllRoutes = ({ total, amount }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/cart">
        <CartPage total={total} amount={amount} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
export default AllRoutes;
