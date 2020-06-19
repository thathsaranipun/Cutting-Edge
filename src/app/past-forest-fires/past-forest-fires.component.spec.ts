import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastForestFiresComponent } from './past-forest-fires.component';

describe('PastForestFiresComponent', () => {
  let component: PastForestFiresComponent;
  let fixture: ComponentFixture<PastForestFiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastForestFiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastForestFiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
