import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])], // empty route for testing
      declarations: [ AppComponent, NavComponent], // nav component required in app template. thus, must be declared
      // schemas: [NO_ERRORS_SCHEMA] // used when many template got many/complex component references...hides warnings
    })

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  // testing that this component contain a router outlet
  fit('should contain a rounter outlet', () => {
    let debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    fixture.detectChanges();

    expect(debugElement).not.toBeNull();
  });

  // // testing that this component contain a router outlet....migrated to nav component
  // fit('should contain a router link pointing to the todos page', () => {
  //   let debugElement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref)); // finds all elements on template

  //   // <a href = "/todos" /> ....rec by routerLink implicitly
  //   let index = debugElement.findIndex(e => e.properties['href'] === '/todos')
  //   expect(index).toBeGreaterThan(-1);
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-integration-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-integration-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content h3').textContent).toContain('angular-integration-testing app is running!');
  // });
});
