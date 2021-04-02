import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formarrayexamples';

  formUserData: FormGroup;  //declaring our form variable

  constructor(private formBuilder : FormBuilder ){}

  ngOnInit(){
    this.formUserData = this.formBuilder.group({
    firstName:[],
    lastName:[],
    email:[],
    phone:[]
    })
   }

}
