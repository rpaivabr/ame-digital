import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoubtsPageComponent } from './doubts-page/doubts-page.component';
import { DoubtsRoutingModule } from './doubts-routing.module';
import { ValidatorsService } from './doubts-page/validators.service';
import { SubjectService } from './doubts-page/subject.service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [DoubtsPageComponent],
  imports: [
    CommonModule,
    DoubtsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    SubjectService,
    ValidatorsService
  ]
})
export class DoubtsModule { }
