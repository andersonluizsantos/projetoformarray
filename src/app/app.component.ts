import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formarrayexamples';

  formUserData: FormGroup;  //declaring our form variable
  skills = new FormArray([]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formUserData = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      phone: []
    })
  }

  addSkill() {
    this.skills.push(new FormControl(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  } 

}
