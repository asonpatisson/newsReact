import React, { Component } from "react";

const Notification = ({ notification, notificationLabel }) => {
  return (
    <div
      className={`mt-16 d-flex jc-center al-center ${notificationLabel}`}
      id="result"
    >
      {notification}
    </div>
  );
};

export default Notification;
