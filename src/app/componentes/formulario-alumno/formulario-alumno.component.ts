import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno, TipoSeccion } from './../../modelos/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output()
  public enviar = new EventEmitter<Alumno>();

  public alumno: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0,
    seccion: '002v'
  }


  public secciones: Array<string>=[
  '002v',
  '003v',
  '004v',
  '005v',
  '006v',
  'Nada',
  ]

  public cambiarRut(evento: Event): void {
    const variable = evento.target as HTMLInputElement
    this.alumno.rut = variable.value;

  }

  public cambiarNombre(evento: Event): void {
    const variable = evento.target as HTMLInputElement
    this.alumno.nombre = variable.value;

  }
  public cambiarApellido(evento: Event): void {
    const variable = evento.target as HTMLInputElement
    this.alumno.apellido = variable.value;

  }

  public cambiarEdad(evento: Event): void {
    const variable = evento.target as HTMLInputElement
    this.alumno.edad = Number.parseInt(variable.value) || 0;
  }

  public cambiarSeccion(evento: Event): void {
    const variable = evento.target as HTMLSelectElement
    this.alumno.seccion = variable.value as TipoSeccion;

  }

  public guardar(): void {
    const copia: Alumno = {
      ...this.alumno
    }
    this.enviar.emit(copia);
    this.alumno.rut= '';
    this.alumno.nombre = '';
    this.alumno.apellido='';
    this.alumno.edad = 0;
    this.alumno.seccion= '002v';
  }


}
