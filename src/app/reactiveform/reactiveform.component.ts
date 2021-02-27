import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reactiveform(regiform:NgForm)
  {
    console.log(regiform.value.name);
    console.log(regiform.value.mobile);
    console.log(regiform.value.email);
  }



















}
