export type TipoSeccion = '002v' | '003v' | '004v' | '005v' | '006v' | 'Nada';
type TipoDoble = `${TipoSeccion}-${TipoSeccion}`;
const SeccionDuplicada: TipoDoble = '002v-004v';
export interface Alumno {
  rut: string;
  nombre: string;
  apellido: string;
  edad: number;
  seccion:  TipoSeccion;

}
