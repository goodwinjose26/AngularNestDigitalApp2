import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsecComponent } from './addsec.component';

describe('AddsecComponent', () => {
  let component: AddsecComponent;
  let fixture: ComponentFixture<AddsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
