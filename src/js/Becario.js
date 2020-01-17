import Alumno from './Alumno.js';

export default class Becario extends Alumno{
  constructor(nombre, apellido, curso , categoria, beca) {
    super(nombre, apellido, curso);
    this.categoria = categoria;
    this.beca = beca;
  }
}
