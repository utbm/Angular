import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteLoginComponent } from './boite-login.component';

describe('BoiteLoginComponent', () => {
  let component: BoiteLoginComponent;
  let fixture: ComponentFixture<BoiteLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
