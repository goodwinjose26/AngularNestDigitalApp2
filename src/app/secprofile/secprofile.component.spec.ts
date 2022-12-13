import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecprofileComponent } from './secprofile.component';

describe('SecprofileComponent', () => {
  let component: SecprofileComponent;
  let fixture: ComponentFixture<SecprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
