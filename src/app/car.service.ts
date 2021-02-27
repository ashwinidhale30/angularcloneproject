import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  cardata()
  {

    const carlist=[

      {carid:1,carname:'maruti'},
      {carid:2,carname:'honda'},
      {carid:3,carname:'audi'},
      {carid:4,carname:'BMW'},
    
    ];

    return carlist;

  }


  cardata1()
  {
    console.log("welcome to our car services");
  }



}
