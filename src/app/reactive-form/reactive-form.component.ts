import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this._fb.group({
      fname: new FormControl('hasmukh'),
      lname: [''],
      address: [''],
      checkbox: [''],
      gender: ['0'],
      city: ['ahmedabad'],
      item: ['']
    });
  }

  onSubmitUserForm(form: FormGroup) {
    if(form.valid) {
      console.log(form.value);
    }
  }

}
