import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerStoresComponent } from './partner-stores.component';

describe('PartnerStoresComponent', () => {
  let component: PartnerStoresComponent;
  let fixture: ComponentFixture<PartnerStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
