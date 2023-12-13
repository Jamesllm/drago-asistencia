const USUARIOS = [
  {
    dni: 75237662,
    nombre: "Ronal",
    apellido: "Llapapasca",
    rol: 1,
  },
  {
    dni: 75231908,
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
