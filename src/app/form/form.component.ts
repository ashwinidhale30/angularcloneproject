import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
