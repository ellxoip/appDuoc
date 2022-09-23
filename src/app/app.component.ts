import { Component } from '@angular/core';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { Alumno } from './modelos/alumno';
import { Historial } from './modelos/historial';
import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaAlumno: Array<Alumno> = [
    {
      rut: "1-1",
      nombre: "Carlos",
      apellido: "Muñoz",
      edad: 22,
      seccion: '002v'
    },

    {
      rut: "2-2",
      nombre: "Dina",
      apellido:"Avila",
      edad: 20,
      seccion:'004v'
    }
  ]

  public guardar(nuevo: Alumno): void {
    this.listaAlumno.push(nuevo);
  }
  public listaSeccion: Array<Seccion> = [
    {
      id: 0,
      nombreSeccion: ''
    }

  ]
  public registrar(otro: Seccion): void{
    this.listaSeccion.push(otro)
  }

  public listaHistorial: Array<Historial> = [
    {
      date: '2022-09-22T13:59:31.238z',
      seccion: 'Vespertino'
    }
  ]
}
