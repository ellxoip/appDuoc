export type TipoAlumno = 'Diurno' | 'Vespertino' | 'Nada';
type TipoDoble = `${TipoAlumno}-${TipoAlumno}`;
const AlumnoDuplicado: TipoDoble = 'Diurno-Vespertino';

export interface Historial {
  date: '2022-09-22T13:59:31.238z';
  seccion:  TipoAlumno;

}
