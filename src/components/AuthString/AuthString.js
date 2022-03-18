import React, { Component } from "react";

const AuthString = ({ label, placeholder, onChange, value }) => {
  return (
    <div className="auth-string">
      <label>{label}</label>
      <input
        className="w-100 mt-16 input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default AuthString;
