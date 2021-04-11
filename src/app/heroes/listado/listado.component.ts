import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes:string[] = ['Spiderman','Ironman','Hulk','Torn']
  borrado:string='';
  borrarHeroe(){
    console.log('borrando....')
    this.borrado = this.heroes.shift() || '';
  }
}
