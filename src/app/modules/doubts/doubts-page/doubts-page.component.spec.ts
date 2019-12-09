import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtsPageComponent } from './doubts-page.component';

describe('DoubtsPageComponent', () => {
  let component: DoubtsPageComponent;
  let fixture: ComponentFixture<DoubtsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubtsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
