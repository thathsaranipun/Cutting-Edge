import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalWeatherDataComponent } from './global-weather-data.component';

describe('GlobalWeatherDataComponent', () => {
  let component: GlobalWeatherDataComponent;
  let fixture: ComponentFixture<GlobalWeatherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalWeatherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
