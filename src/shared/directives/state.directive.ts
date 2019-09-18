import { Directive, HostBinding, Input, OnInit, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {

  }

  ngOnChanges() {
    // console.log(this.appState);
    // ngOnInit ne s'exécute qu'une fois
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass = (state: any) =>{
    // depuis es6 la concatenation fonctionne avec `` pas besion de mettre +
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}

//appState === 'Annulé' => state-annule
