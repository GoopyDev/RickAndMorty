import React from "react";
import "./Form.modules.css";
import validar from "./Validation";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.id]: event.target.value });
    setErrors(validar({ ...userData, [event.target.id]: event.target.value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Hola, el botón funciona");
    props.loginfn(userData);
  }

  return (
    <div className="mainDiv">
      <form onSubmit={submitHandler}>
        <h1>Bienvenido!</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userData.username}
          onChange={handleChange}
        />
        <p className="error">{errors?.username}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className="error">{errors?.password}</p>

        <button type="submit">Ingresar</button>
      </form>
      <div id="errorDiv">
        <p>Usuario o contraseña incorrectos</p>
      </div>
    </div>
  );
}
