import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import ProtectedRoute from "../container/ProtectedRoute";
const Routes = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <Route exact path="/">
        <Redirect to="/signup" />
      </Route>
      <ProtectedRoute
        component={SignUp}
        auth={!auth}
        path="/signup"
        redirect="/home"
      />
      <ProtectedRoute
        component={Home}
        auth={auth}
        path="/home"
        redirect="/signup"
      />
    </>
  );
};
export default Routes;
