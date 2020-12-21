/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

// Testing directives

// this component uses the highlight attribute directive
@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  fit('should highlight first element with cyan', () => {
    let debugElement = fixture.debugElement.queryAll(By.css('p'))[0]; // first p element

    expect(debugElement.nativeElement.style.backgroundColor).toBe('cyan') // tests directive attribute value on host component template
  })

  fit('should highlight second element with default color', () => {
    let debugElement = fixture.debugElement.queryAll(By.css('p'))[1]; // first p element
    let directiveComponent = debugElement.injector.get(HighlightDirective); // gets the actual component

    expect(debugElement.nativeElement.style.backgroundColor).toBe(directiveComponent.defaultColor) // tests template with default component property
  })
});
