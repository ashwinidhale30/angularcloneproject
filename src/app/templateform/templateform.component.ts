import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  templateform(regform:NgForm)
  {
    console.log(regform.value.name);
    console.log(regform.value.mobile);
    console.log(regform.value.email);
  }














}
