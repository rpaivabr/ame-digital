import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from './subject.service';

@Component({
  selector: 'ame-doubts-page',
  templateUrl: './doubts-page.component.html',
  styleUrls: ['./doubts-page.component.scss']
})
export class DoubtsPageComponent implements OnInit {

  contactForm: FormGroup;
  subjects: any[] = [];
  subjectList: any[] = [];
  documentMask = '000.000.000-009999';

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();

    this.contactForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      document: new FormControl('', Validators.required),
      classification: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  get fullname() {
    return this.contactForm.get('fullname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get document() {
    return this.contactForm.get('document');
  }
  get classification() {
    return this.contactForm.get('classification');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }

  changeClassification(ev) {
    const option = ev.target.value;
    if (option) {
      this.subjectList = [...this.subjects[option - 1]];
    } else {
      this.subjectList = [];
    }
  }

  switchDocumentMask(document: string) {
    const documentControl = this.contactForm.get('document');
    if (document.length < 12) {
      this.documentMask = '000.000.000-009999';
      documentControl.setValidators([Validators.required, Validators.minLength(11)]);
      documentControl.updateValueAndValidity();
    } else {
      this.documentMask = '00.000.000/0000-00';
      documentControl.setValidators([Validators.required, Validators.minLength(14)]);
      documentControl.updateValueAndValidity();
    }
  }

  enviarForm(ev) {
    ev.preventDefault();
    console.log(this.contactForm.value);
  }

}
