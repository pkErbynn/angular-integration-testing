import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

// Testing dependencies provisioning
// TodoService as a dependency to TodosComponent.
// Uses http module
// Async Testing

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      providers: [TodoService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing in OnInit = integration testing
  // Unit test on it may pass while integration will not if "implements OnInit" is removed
  xit('should load todos on server init', () => {
    let todoService = TestBed.get(TodoService); //get service instance at root module
    // spyOn(todoService, 'getTodos').and.returnValue(Observable.from([ [1,2,3] ])); // from() api doesn't work at that moment (that's the reason it's excluded from test run)

    fixture.detectChanges(); // update component after observable creation

    expect(component.todos.length).toBe(3);
  });


  // Testing Async of Promise unlike Observable to behave as sync also
  fit('should load todos from server promisically :)', fakeAsync(() => {
    let todoService = TestBed.get(TodoService); //get service instance at root module
    spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve( [1,2,3] )); // from() api doesn't work at that moment (that's the reason it's excluded from test run)

    fixture.detectChanges(); // update component after observable creation

    tick(); // async deal
    expect(component.todos.length).toBe(3);
    console.log("EXPECT WAS CALLED");

    // or this with 'async'
    // fixture.whenStable().then(() => {
    //   expect(component.todos.length).toBe(3);
    // })
  }));
});
