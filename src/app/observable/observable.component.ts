import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  status:any;

  data:Observable<any>;

  ngOnInit(): void {

    new Observable(observer => {

      setTimeout(() => {
        
        observer.next('order is placed');

      }, 2000);

      setTimeout(() => {
        
        observer.next('order is shipped');

      }, 5000);

      setTimeout(() => {
        
        observer.next('order is delivered');

      }, 8000);


    }).subscribe(val => 
      {
      this.status=val;
      })
  

  }

}
