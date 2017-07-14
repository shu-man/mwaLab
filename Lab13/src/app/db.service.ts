import {Injectable} from '@angular/core';

@Injectable()
export class DbService {
  public data:Object[]= [{ id: '1', name: 'Asaad Saad', stuId: '12345', email: 'asaadsaad@mum.edu' },
    { id: '2', name: 'Suman Karki', stuId: '1234', email: 'sumankarki@mum.edu' },
    { id: '3', name: 'Sulav Neupane', stuId: '123456', email: 'sulavneupane@mum.edu' }];

  constructor() {
  }

  getData() {
    return this.data;
  }

  public getStudentDetails(sid:string)
  {
    for( let dataStudent of this.data)
    {
      console.log(dataStudent);
      if(dataStudent["id"]==sid)
      {
        return dataStudent;
      }

    }
    return null;
  }
}
