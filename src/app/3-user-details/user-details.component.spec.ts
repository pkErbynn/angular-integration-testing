/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

// Testing Navigation
// This tests the interraction of the component to the stubbed router instead of a real one
// Stubbed dependencies approach is used when dependencies to be provided are complex. eg: router

class RouterStub {
  navigate(param){
  }
}

class ActivatedRouteStub {
  private subject = new Subject();

  // simulate a route / path param value by pushing value
  push(value){
    this.subject.next(value);
  }

  // param property to be called in OnInit()
  get params(){
    return this.subject.asObservable();
  }
  // params: Observable<any>; // Observable.empty(); // empty() doesn't work atm..resolves 'subscribe' on undefined error
}

// excluded due to observable.empty() issue
describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      // imports: [ AppRoutingModule]

      // stubbing navigation dependencies
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should redirect user to users page on save()', () => {
    // get access to router
    let router = TestBed.get(Router);
    // no call fake method cus method is already faked
    let spy = spyOn(router, 'navigate')

    component.save();

    expect(spy).toHaveBeenCalledWith(['users'])
  });

  // testing how to use route / path params
  fit('should redirect user to not found page if an invalid user id passed', () => {
    let router = TestBed.get(Router); // gets router
    let spy = spyOn(router, 'navigate')

    let route = TestBed.get(ActivatedRoute) // call to actual route uses stubbed one :)
    route.push({id: 0}); // pushes value to be used in ngOnInit

    expect(spy).toHaveBeenCalledWith(['not-found'])
  });
});
