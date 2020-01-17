import Alumno from './js/Alumno.js';
import Becario from './js/Becario.js';

const alumno1 = new Alumno('Mauro', 'Azzo');

console.log(alumno1);

alumno1.setCurso('programacion');
const { nombre, apellido, curso } = alumno1;

console.log(nombre, apellido, curso);

console.log(`El alumno ${nombre} ${apellido} está inscripto al curso de ${curso}`);

const becario = new Becario('Mauro', 'Azzo', 'Programacion', 'becario', '50%');

console.log(becario)

