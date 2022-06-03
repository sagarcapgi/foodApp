import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form :any={
    Name:'',
    Password:'',
    PassCode:'',
    Email:''
  }

  loginData:any={
    email:'',
    password:''
  }

  status:boolean=false;

  onSubmit=()=>{
    console.log(this.form);
    
  }
  onLogin=()=>{
    alert('login sucess'+ this.loginData.email)
  }
  OnToggle=()=>{
    this.status=!this.status;
    console.log(this.status);
    
  }
  constructor() { }

  
  ngOnInit(): void {
  }


  setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  
  }
   
  
}
