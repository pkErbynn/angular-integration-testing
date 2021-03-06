import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// In template, what do we test? Ans: test anything bindings, ie
// event bindings,
// property bindings,
// style bindings
// class bindings

fdescribe('VoterComponent', () => {
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

  // property bindings
  it('should render totalVote in template when upvoted', () => {
    voterComponent.othersVote = 20;
    voterComponent.myVote = 1;
    fixture.detectChanges(); // update the component with the data

    // voterComponent.upVote(); // DON'T need to call this method in component to update totalVote

    // fixture wrapper achitecture....fixture => compoenentInstance & debugElement(gets classes and tags in dom) => nativeElemeent(gets actual values)
    let debugElement = fixture.debugElement.query(By.css('.vote-count')) // debug by query to get
    let element: HTMLElement = debugElement.nativeElement; // wrap with htmlElement to get the html value

    expect(element.innerText).toContain('21') // contain => for strings...toBe for ints
  });

  // class binding
  it('should highlight button when myvote is equal to 1', () => {
    voterComponent.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up')); // this class, since highlight comes from that

    expect(debugElement.classes['highlighted']).toBeTruthy()
  })

   // event binding
   it('should increase myvote by 1 if upvoted is triggered in template', () => {
    let buttonDebugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up')); // gets button
    buttonDebugElement.triggerEventHandler('click', null); // click() => null ...click(data) => data
    // voterComponent.upVote() // similar trigger with that of unit test but not needed here

    expect(voterComponent.myVote).toBe(1)
  })
});
