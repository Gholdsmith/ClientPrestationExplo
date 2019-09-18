import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ItemClientComponent } from './components/item-client/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [PageClientsComponent, ItemClientComponent, ListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }

