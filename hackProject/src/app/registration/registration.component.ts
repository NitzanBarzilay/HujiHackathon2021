import {Component, OnInit} from '@angular/core';
// import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registrationForm: FormGroup;

  constructor() {
    // constructor(private fb: FormBuilder) {
    //   this.registrationForm = this.fb.group({
    //   name: [''],
    //   owner: [''],
    //   city: [''],
    // });
   }

  ngOnInit(): void {
  }

}
