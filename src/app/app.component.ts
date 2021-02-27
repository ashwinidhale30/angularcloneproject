import { Component } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10';


  /*********************************************************** 
  name="ashwini";

  a=40;
  b=50;
  ans=this.a+this.b;

pqr()
{

  let a=10;
  let b=20;
  let ans=a+b;
  alert(ans);
}

//msg=true;
msg=false;

student=[
  {studroll:11,studname:'pinky'},
  {studroll:12,studname:'rhea'},
  {studroll:13,studname:'ankita'},
  {studroll:14,studname:'prachi'},
  {studroll:15,studname:'sonal'},
  {studroll:16,studname:'punam'},
  {studroll:17,studname:'sapna'},

];


abc="pink";
abcd="purple";


classname="xyz";
classname1="ooo";

/**************interpolation*************************************

wish="bappa bless you";           //string example

//property example
course={
  php:20,
  java:30,
  python:40
}

course1=['java','php','python'];             //array example

/***************property binding*******************************************

val="red";
msg1="bappa morya";
msg2="Enter your name";

/*********************event binding******************************************************

xxx()
{
  alert('operation successful');
}

yyy(a,b)
{
  let ans=a+b;
  alert('addition is:' +ans);
}

/*************************two way binding**********************************

//no1="2";
//no2="2";

/******************************pipes******************************************

student1=['ASHWINI',10,'ash@gmail.com',222020,'pune',50000 ];

*********************routing *********************************/






























}