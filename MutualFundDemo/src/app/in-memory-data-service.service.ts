import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService {
  createDb() {
    const users = [
  {Email : 'shaikhnaim14@gmail.com',  Password: 'naim123', PancardNumber:'NAEEM1111R' },
  {Email : 'rehan@gmail.com',  Password: '123654', PancardNumber:'RAHEEM1111R' },
  {Email : 'shahu@gmail.com',  Password: '456987', PancardNumber:'KEEEL1111R' },
  
     ];
    return {users};
  }
  constructor() { }

}
