import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHint } from '@angular/material/form-field';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  principal: number;
  years: number;
  rate: number;
  monthlyPayment: number;
  numberOfPayments: number;
  formArray: Array<Object> = [];

  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      principal: ['', Validators.required],
      rate: ['', Validators.required],
      years: ['', Validators.required]
    })
  }

  get form() {return this.loanForm.controls};

  onSubmit(event) {
    this.principal = this.form.principal.value / 12;
    this.years = this.form.years.value;
    this.rate = this.form.rate.value;
    this.formArray.push({
      principal: this.principal,
      years: this.years,
      rate: this.rate
    });
    console.log(this.formArray);
    event.currentTarget.reset();
  }

  calculate() {
    this.numberOfPayments = this.years * 12;
    //this.monthlyPayment = this.principal * Math.pow((1 + this.rate), this.numberOfPayments) / (Math.pow((1 + this.rate), this.numberOfPayments) - 1);
    this.monthlyPayment = this.principal * (this.rate * Math.pow((this.rate + 1), this.numberOfPayments)) / (Math.pow((1 + this.rate), this.numberOfPayments) -1);
    console.log(this.monthlyPayment);
  }

}
