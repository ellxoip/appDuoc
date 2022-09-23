import { Component, Output, EventEmitter} from '@angular/core';
import { Seccion } from '../../modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {

  @Output()
  public enviar = new EventEmitter<Seccion>();

  public seccion: Seccion = {

    id: 0,
    nombreSeccion: ''
  }


  public cambiarId(evento: Event): void {
    const variable = evento.target as HTMLInputElement
    this.seccion.id = Number.parseInt(variable.value) || 0;
  }

  public cambiarNombreSeccion(evento: Event): void {
    const variable = evento.target as HTMLInputElement
    this.seccion.nombreSeccion = variable.value;

  }


  public registrar(): void {
    const copia: Seccion = {
      ...this.seccion
    }
    this.enviar.emit(copia);
    this.seccion.id= 0;
    this.seccion.nombreSeccion = '';
  }


}
