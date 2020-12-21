import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';


// Testing Router Link

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ NavComponent ]
    })

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing that this component contain a router outlet
  fit('should contain a router link pointing to the todos page', () => {
    let debugElement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref)); // finds all elements on template

    // <a href = "/todos" /> ....rec by routerLink implicitly
    let index = debugElement.findIndex(e => e.properties['href'] === '/todos')
    expect(index).toBeGreaterThan(-1);
  });
});
