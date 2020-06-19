import { AppServices } from './app-services';
import { TestBed } from '@angular/core/testing';
// describe('AppServices', () => {
//   it('should create an instance', () => {
//     expect(new AppServices()).toBeTruthy();
//   });
// });


describe('AppServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppServices = TestBed.get(AppServices);
    expect(service).toBeTruthy();
  });
});