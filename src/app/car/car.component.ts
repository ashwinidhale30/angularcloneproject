import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(public CarService:CarService) { }

  carlist=[];

  ngOnInit(): void {

    this.carlist=this.CarService.cardata();

  }






}
