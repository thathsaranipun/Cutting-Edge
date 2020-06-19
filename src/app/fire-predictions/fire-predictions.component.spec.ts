import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FirePredictionsComponent } from './fire-predictions.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule ({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FirePredictionsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FirePredictionsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngtest'`, () => {
    const fixture = TestBed.createComponent(FirePredictionsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngtest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FirePredictionsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ngtest app is running!');
  });
});