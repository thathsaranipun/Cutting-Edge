import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaboutusComponent } from './pageaboutus.component';

describe('PageaboutusComponent', () => {
  let component: PageaboutusComponent;
  let fixture: ComponentFixture<PageaboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageaboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
