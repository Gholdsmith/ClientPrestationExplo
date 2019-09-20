import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  // Angular après avoir capté les changemtns de mettra à jour que les vue qui changent
  // a condition que :
  //    il capte une Event,
  //    qu'il ya souscription à un observable dans le HTML,
  //    ou q'un @Input change de valeur
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-app';
}
