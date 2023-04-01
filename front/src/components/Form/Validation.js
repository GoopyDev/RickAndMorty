// Para testear si la clave contiene números:
const expNum = /(?=.*\d)/;
// Para validar el correo:
const mailRegex =
  /^[\w-.]+@([\w-]+\.)+([a-zA-Z]{2,3}|[a-zA-Z]{2}\.[a-zA-Z]{2})$/;

export default function validar(data) {
  const { username, password } = data;
  let errores = {};

  // Validación de usuario //
  if (username.length > 35) {
    errores = {
      ...errores,
      username: "No puede contener más de 35 caracteres",
    };
  }
  if (!mailRegex.test(username)) {
    errores = { ...errores, username: "El usuario debe ser un email válido" };
  }
  if (username === "") {
    errores = { ...errores, username: "Debe ingresar un usuario" };
  }

  // Validación de password //
  if (!expNum.test(password)) {
    errores = { ...errores, password: "Debe contener al menos un número" };
  }
  if (password.length < 6) {
    errores = { ...errores, password: "Debe tener un mínimo de 6 caracteres" };
  }
  if (password === "") {
    errores = { ...errores, password: "Debe ingresar una clave" };
  }
  return errores;
}
