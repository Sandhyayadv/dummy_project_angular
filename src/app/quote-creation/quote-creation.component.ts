


import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.component.html',
  styleUrls: ['./quote-creation.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule,ReactiveFormsModule]
})
export class QuoteCreationComponent implements OnInit {

currentStep = 0;
customerId!: number;

  step = 1;
  today = new Date();
  // showQuoteSummaryCard = false;
  showQuoteSummaryCard: boolean = false;
  personal!: FormGroup;
  professional!: FormGroup;
  coverage!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.personal = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      pan: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });

    this.professional = this.fb.group({
      professionType: ['', Validators.required],
      specialization: ['', Validators.required],
      experience: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      qualification: ['', Validators.required],
      qualificationYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      registrationNumber: ['', Validators.required],
      registrationYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      practiceType: ['', Validators.required],
      state: ['', Validators.required],
    });

    this.coverage = this.fb.group({
      aoy: ['', Validators.required],
      aoa: ['', Validators.required],
      bodilyInjury: [true, Validators.requiredTrue],  // Required checkbox
      negligence: [false],
      legalDefense: [false],
      confidentialityBreach: [false],
      employeeDishonesty: [false],
      lossOfDocuments: [false],
      premium: ['8500'] // default mock value, can be replaced with calculated one
    });
  }

  nextStep(): void {
    if (this.step === 1 && this.personal.valid) {
      this.step++;
    } else if (this.step === 2 && this.professional.valid) {
      this.step++;
    } else if (this.step === 3 && this.coverage.valid) {
      this.step++;
    } else {
      this.markCurrentStepInvalidControls();
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  markCurrentStepInvalidControls(): void {
    const group = this.getCurrentFormGroup();
    Object.keys(group.controls).forEach(key => {
      group.get(key)?.markAsTouched();
    });
  }

  getCurrentFormGroup(): FormGroup {
    switch (this.step) {
      case 1: return this.personal;
      case 2: return this.professional;
      case 3: return this.coverage;
      default: return this.personal;
    }
  }

  onSubmitQuote(): void {
    if (this.professional.valid && this.coverage.valid) {
      this.showQuoteSummaryCard = true;
    } else {
      this.markCurrentStepInvalidControls();
    }
  }

  handleCustomerSelection(isExisting: boolean): void {
    if (isExisting) {
      this.router.navigate(['/customer']);
    } else {
      this.router.navigate(['/createCustomer']);
    }
  }
  
}
