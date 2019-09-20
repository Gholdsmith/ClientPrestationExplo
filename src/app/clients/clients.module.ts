import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { SharedModule } from 'src/shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { TemplatesModule } from '../template/templates.module';



@NgModule({
  declarations: [PageClientsComponent, ItemClientComponent, ListClientsComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule
  ]
})
export class ClientsModule { }

