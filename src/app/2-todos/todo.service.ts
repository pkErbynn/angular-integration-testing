import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  getTodos() {
    return this.http.get<any[]>('...');
  }

  getTodosPromise() {
    return this.http.get<any[]>('...').toPromise();
  }

  delete(id) {
    return this.http.delete('...');
  }
}
