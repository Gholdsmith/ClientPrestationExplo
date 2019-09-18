import { Client } from 'src/shared/models/client.model';

export const fakeClients: Client[] = [

 new Client({
   id: '1',
   name: 'tintin',
   email: 'tintin.milou@gmail.com'
 }),
 new Client({
   id: '2',
  name: 'toto',
  email: 'tintin.milou@gmail.com'
 })
];
