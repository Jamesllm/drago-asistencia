const USUARIOS = [
  {
    dni: 45678912,
    nombre: "Ronal",
    apellido: "Llapapasca",
    rol: 1,
  },
  {
    dni: 25814563,
    nombre: "Jhon",
    apellido: "Llapapasca",
    rol: 1,
  },
  {
    dni: 12345678,
    nombre: "Usuario prueba",
    apellido: "",
    rol: 2,
  },
];

const getUsuarios = () => USUARIOS;
const getUsuario = (dni) => USUARIOS.find((user) => user.dni === parseInt(dni));

export { getUsuarios, getUsuario };
