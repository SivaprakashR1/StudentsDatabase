import { Component } from '@angular/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user_records:any[]=[];
  data = {
    name:"",
    roll:"",
    email:"",
    Department:""
  }
  doRegistration(values:any){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v)=> {
      return v.email == this.data.email
    })){
    alert("Duplicate Data");
    }
    else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Hi "+ this.data.name + " you are successfully registered")
    }
  }

}
