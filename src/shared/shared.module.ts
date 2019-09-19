import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './components/tableau/tableau.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, AddButtonComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, AddButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
