import { Prestation } from 'src/shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
 new Prestation({
   id: 'lkjsdf',
   client: 'RS2i',
   typePresta: 'Dev',
   nbJours: 50,
   tjmHt: 1200,
   comment: 'Merci RSII pour les 1.2k/j'
 }),
 new Prestation({
   id: 'sdfs',
   client: 'Modis',
   typePresta: 'Coaching',
   nbJours: 20,
   tjmHt: 1800,
   comment: 'Merci Modis pour les 1.8k/j'
 })
];
