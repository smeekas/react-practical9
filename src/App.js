import "./App.css";

import { useEffect } from "react";
import { getData } from "./services/localStorage";
import { useDispatch } from "react-redux";
import { userActionTypes } from "./actionTypes/userActionTypes";
import { useHistory } from "react-router-dom";
import Routes from "./routes/Routes";
function App() {
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    const users = getData();
    console.log(users);
    if (users) {
      dispatch({
        type: userActionTypes.ADD_USER_DATA,
        userData: users,
      });
      history.push("/home");
    }
  }, [dispatch, history]);
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
