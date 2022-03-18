import React, { useState, useMemo } from "react";
import AuthString from "../AuthString";
import Button from "../Button";
import Notification from "../Notification";
import "./auth.css";

const Auth = () => {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const loginValue = "Dasha";
  const passwordValue = "123";
  const [notification, setNotification] = useState("");
  const [notificationLabel, setNotificationLabel] = useState("");

  const changeLogin = (e) => {
    setFirstInputValue(e.target.value);
  };

  const changePassword = (e) => {
    setSecondInputValue(e.target.value);
  };

  const submit = () => {
    if (firstInputValue == loginValue && secondInputValue == passwordValue) {
      setNotification("Ура, данные правильные!");
      setNotificationLabel("success");
    } else {
      setNotification("НЕПРАВИЛЬНЫЙ ВВОД ДАННЫХ");
      setNotificationLabel("warning");
    }
  };

  return (
    <div className="auth-window w-100 d-flex jc-center al-center">
      <div className="auth-block">
        <AuthString
          label="Логин"
          placeholder="Введите логин"
          value={firstInputValue}
          onChange={changeLogin}
        />
        <AuthString
          label="Пароль"
          placeholder="Введите пароль"
          value={secondInputValue}
          onChange={changePassword}
        />
        <div className="btn-wrap mt-40 d-flex al-center jc-center">
          <Button label="Войти" btnColor="pink-btn" onClick={submit} />
        </div>
        <Notification
          notification={notification}
          notificationLabel={notificationLabel}
        />
      </div>
    </div>
  );
};

export default Auth;
