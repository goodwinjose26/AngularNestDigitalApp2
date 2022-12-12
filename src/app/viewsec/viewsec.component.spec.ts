import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsecComponent } from './viewsec.component';

describe('ViewsecComponent', () => {
  let component: ViewsecComponent;
  let fixture: ComponentFixture<ViewsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
