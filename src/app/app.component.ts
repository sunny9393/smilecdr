import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as data from 'src/assets/questionnaire.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  myForm: FormGroup;
  displayData: any;

  storeJsonData: any[];
  myNewForm: FormGroup;
  displayNewData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      allergies: ["False"],
      gender: ["Male"],
      date: [""],
      country: [""],
      status: [""],
      smoke: [""],
      drink: [""]
    });

    this.createNewForm();
  }

  onSubmit() {
    this.displayData = JSON.stringify(this.myForm.value);
  }

  onSubmitNewForm() {
    this.displayNewData = JSON.stringify(this.myNewForm.value);
  }

  createNewForm() {
    this.storeJsonData = data.item;

    this.myNewForm = this.fb.group({
      newAllergies: ["False"],
      newGender: ["Male"],
      newDate: [""],
      newCountry: [""],
      newStatus: [""],
      newSmoke: [""],
      newDrink: [""]
    })
  }

}
