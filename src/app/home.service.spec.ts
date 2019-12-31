import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeAll(() => {
    console.log('Home beforeAll');
  });

  beforeEach(() => {
    console.log('Home beforeEach');
  });

  afterAll(() => {
    console.log('Home afterAll');
  });

  afterEach(() => {
    console.log('Home afterEach');
  });

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  // Should have add function
  it('Should have add function', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service.add).toBeTruthy();
  });

  // Should calculate add function properly
  it('should calculate add function properly', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service.add(1, 2)).toEqual(3);
  });

});