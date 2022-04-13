import styles from "./Home.module.css";
import Button from "../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { userActionTypes } from "../../actionTypes/userActionTypes";
import {removeData}  from '../../services/localStorage'
import { useHistory } from "react-router-dom";
const Home = (props) => {
  let userData = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  document.title="Home"
  
  const logoutHandler = () => {
    dispatch({ type: userActionTypes.REMOVE_USER_DATA });
      removeData();
    history.push("/signup");
  };
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Button className={styles.button} onClick={logoutHandler}>
          Logout
        </Button>
      </div>
      <section className={styles.card}>
        <div className={styles.profilePicture}>
          <img
            className={styles.picture}
            src={userData.photo}
            alt={userData.name}
          />
        </div>
        <div className={styles.userName}>
          <h4>Hello {userData.name}</h4>
          <p>you are registered with following details....</p>
        </div>
        <section className={styles.userInfo}>
          <ul className={styles.list}>
            <li>Email: {userData.email}</li>
            <li>Phone No: {userData.phone}</li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default Home;
