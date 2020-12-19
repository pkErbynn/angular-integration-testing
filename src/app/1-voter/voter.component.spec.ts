import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let voterComponent: VoterComponent;

  beforeEach(() => {
    // utilities for tesing...configure metadata for testing
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })

    // fixure => a wrapper around components and
    fixture = TestBed.createComponent(VoterComponent)
    voterComponent = fixture.componentInstance;
    // fixture.nativeElement...gets root element
    // fixture.debugElement // gets dom element...wrapper of native element at the top line :)
  });

  it('should render totalVote in template when upvoted', () => {
    voterComponent.othersVote = 20;
    voterComponent.myVote = 1;
    fixture.detectChanges(); // update the component with the data

    // voterComponent.upVote(); // DON'T call method in component

    // fixture wrapper achitecture....fixture => compoenentInstance & debugElement(gets classes and tags in dom) => nativeElemeent(gets actual values)
    let debugElement = fixture.debugElement.query(By.css('.vote-count')) // debug by query to get
    let element: HTMLElement = debugElement.nativeElement; // wrap with htmlElement to get the html value

    expect(element.innerText).toContain('21') // contain => for strings...toBe for ints
  });
});
