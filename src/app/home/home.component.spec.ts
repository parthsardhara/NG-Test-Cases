import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // String should be same
  it('should be same', () => {
    expect('hello').toBe('hello');
  });

  // String should not be same
  it('should be not same', () => {
    const name = 'hello';
    expect(name).not.toBe('hello1');
  });

  // String should start with hello
  it('string should start with hello', () => {
    const name = 'helloworded';
    expect(name).toMatch('hello');
  });

  // String include name for name()
  it('string include name into the message', () => {
    const name = component.name('parth');
    expect(name).toContain('parth');
  });

  // String include arrayList for arrayList()
  it('string include arrayList into the message', () => {
    const name = component.arrayList();
    expect(name).toContain('first name');
    expect(name).toContain('last name');
    expect(name).toContain('middle name');
  });

  // Variable stateValue having value state value  
  it('string stateValue having value state value', () => {
    const name = component.stateValue;
    expect(name).toBe('state value');
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(component.isLoggedIn);
  });

  it('should not be null isLoggedInArrary', () => {
    const isLoggedInArrary = component.isLoggedInArrary;
    expect(isLoggedInArrary).toEqual(['a']);
  });

  // Object1 and Object2 are same.
  const Object1 = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };

  const Object2 = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };

  // toEqual
  it('Object1 and Object2 are same.', () => {
    expect(Object1).toEqual(Object2);
  });

  // toBeNull
  it('toBeNull.', () => {
    expect(component.stateValuea).toBeNull();
  });

  // toBeUndefined
  it('toBeUndefined.', () => {
    let name;
    expect(name).toBeUndefined();
  });


  // toBeLessThan
  it('toBeLessThan', () => {
    var percent = component.toBeLessThanValue;
    expect(percent).toBeLessThan(11);
  });

  // toBeGreaterThan
  it('toBeGreaterThan', () => {
    var percent = component.toBeGreaterThanValue;
    expect(percent).toBeGreaterThan(1);
  });

  // toBeLessThanOrEqual
  it('toBeLessThanOrEqual', () => {
    var percent = component.toBeLessThanOrEqual;
    expect(percent).toBeLessThanOrEqual(14);
  });

  // toBeGreaterThanOrEqual
  it('toBeGreaterThanOrEqual', () => {
    var percent = component.toBeGreaterThanOrEqual;
    expect(percent).toBeGreaterThanOrEqual(1);
  });

  // toBeNaN
  it('toBeNaN', () => {
    var toBeNaNValue = component.toBeNaN;
    expect(toBeNaNValue).toBeNaN();
  });

  it('home works!', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe('home works!');
  });

  it('toBeDefined', () => {
    expect(component.stateValue).toBeDefined();
  });

});
