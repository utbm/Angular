import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisualisationComponent } from './page-visualisation.component';

describe('PageVisualisationComponent', () => {
  let component: PageVisualisationComponent;
  let fixture: ComponentFixture<PageVisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVisualisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
