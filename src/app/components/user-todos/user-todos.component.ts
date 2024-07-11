import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss'],
})
export class UserTodosComponent implements OnInit {
  userId!: number;
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.loadTodos();
    });
  }

  loadTodos(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.filterTodosByUserId();
    });
  }

  filterTodosByUserId(): void {
    this.filteredTodos = this.todos.filter(
      (todo) => todo.userId === this.userId
    );
    console.log(this.filteredTodos);
  }
}
