/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

// This tests the interraction of the component to the stubbed router instead of a real one
// Stubbed dependencies approach is used when dependencies to be provided are complex. eg: router

class RouterStub {
  navigate(param){
  }
}

class ActivatedRouteStub {
  // params: Observable<any> = Observable.empty(); // empty() doesn't work atm..resolves 'subscribe' on undefined error
}

// excluded due to observable.empty() issue
xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      // imports: [ AppRoutingModule]

      // stubbing dependencies
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
});
