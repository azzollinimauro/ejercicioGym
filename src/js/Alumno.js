export default class Alumno {
  constructor(nombre, apellido, curso = 'ninguno') {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getName() {
    return this.name;
  }

  getApellido() {
    return this.apellido;
  }

  setCurso(curso) {
    this.curso = curso;
  }
}
