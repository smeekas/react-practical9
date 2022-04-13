import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  auth,
  redirect,
  path,
  ...rest
}) => {
  return (
    <Route exact path={path}>
      {auth ? <Component {...rest} /> : <Redirect to={redirect} />}
    </Route>
  );
};
export default ProtectedRoute;
