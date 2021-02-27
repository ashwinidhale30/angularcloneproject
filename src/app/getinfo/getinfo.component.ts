import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetinfoService } from '../getinfo.service';

@Component({
  selector: 'app-getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.css']
})
export class GetinfoComponent implements OnInit {

  constructor(public GetinfoService:GetinfoService) { }

  msgtrue=false;
  infodata:any;

  ngOnInit(): void {

    this.GetinfoService.getinfo().subscribe(data =>
    {
      this.infodata=data;
    });

  }
/**********************static input of data*********************** 
  insertinfo()
  {
    const forminfo={id:'',name:'wini',address:'nagpur'}    //id must be unique, as we are taking static value,if we run multiple times,it might produce error.

    this.GetinfoService.postinfo(forminfo).subscribe(data =>{
    
      this.msgtrue=true;

    });
  }
*********************************/
   
/******************dynamic input of data**********************************************/
 
insertinfo(myform:NgForm)
  {
    
    console.log(myform.value.id);
    console.log(myform.value.name);
    console.log(myform.value.address);
    
    const forminfo={id:myform.value.id,name:myform.value.name,address:myform.value.address}    //insert query 

    this.GetinfoService.postinfo(forminfo).subscribe(data =>{
    
    this.msgtrue=true;

    });
  }
 
/*****************update data************************************************************** */
updateinfo(studentid)
{

  const newforminfo={id:studentid,name:'priya',address:'kashmir'}    //update query

  this.GetinfoService.updateinfo(studentid,newforminfo).subscribe(data =>{
    
    this.msgtrue=true;

    });



}

  
/***************delete data************************************************************************ */

deleteinfo(studentid)
{

  this.GetinfoService.deleteinfo(studentid).subscribe(data =>{
    
    this.msgtrue=true;

    });



}












/******************************************************************* */
}
