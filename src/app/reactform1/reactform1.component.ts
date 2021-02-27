import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactform1',
  templateUrl: './reactform1.component.html',
  styleUrls: ['./reactform1.component.css']
})
export class Reactform1Component implements OnInit {

  studreact:FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.studreact=formBuilder.group(

      {

        //name:new FormControl(),
        //mobile:new FormControl(),
        //email:new FormControl()

        name:['',[Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)],
          Validators.pattern('^[a-zA-Z]+$') ],

        mobile:['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)] ],

        email:['',[Validators.required,Validators.minLength(7),Validators.maxLength(14)] ]


      }

    )
  }

  ngOnInit(): void {

   // this.studreact.patchValue({name:'ash',mobile:1212121212,email:"ash@gmail.com"})
  }

  studdata()
  {
    //console.log(this.studreact);
    console.log(this.studreact.value.name);
    console.log(this.studreact.value.mobile);
    console.log(this.studreact.value.email);
  }


  filldata()
  {
    this.studreact.setValue(
      {
      email:'ashgmail.com',
      name:'ash',
      mobile:12121212
        
      }
    )

      /*
    this.studreact.patchValue(
      {
        mobile:1234123455,
        email:'ash@gmail.com',
        name:"ash"
      }
    )*/
  }

  
  cleardata()
  {
    this.studreact.reset();
  }




}
