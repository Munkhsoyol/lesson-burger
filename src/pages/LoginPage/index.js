import React, { useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Login = props => {
  const userContext = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "12"
  });

  const changeEmail = e => {
    const newEmail = e.target.value;
    setForm(formBefore => ({
      email: newEmail,
      password: formBefore.password
    }));
  };

  const changePassword = e => {
    const newPassword = e.target.value;
    setForm(formBefore => ({
      email: formBefore.email,
      password: newPassword
    }));
  };

  const login = () => {
    userContext.loginUser(form.email, form.password);
  };

  return (
    <div className={css.Login}>
      {props.userId && <Redirect to="/orders" />}
      <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {userContext.state.logginIn && <Spinner />}
      {userContext.state.error && (
        <div style={{ color: "red" }}>
          {userContext.state.error} код нь : {userContext.state.error}
        </div>
      )}
      <Button text="ЛОГИН" btnType="Success" daragdsan={login} />
    </div>
  );
};

export default Login;
