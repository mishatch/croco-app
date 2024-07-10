import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  data = [
    {
      name: 'John',
      surname: 'Doe',
      number: '31',
      mail: 'da@gmail.com',
      company: 'Google',
      links: 'www.google.com',
    },
    {
      name: 'John',
      surname: 'Doe',
      number: '31',
      mail: 'da@gmail.com',
      company: 'Google',
      links: 'www.google.com',
    },
    {
      name: 'John',
      surname: 'Doe',
      number: '31',
      mail: 'da@gmail.com',
      company: 'Google',
      links: 'www.google.com',
    },
    {
      name: 'John',
      surname: 'Doe',
      number: '31',
      mail: 'da@gmail.com',
      company: 'Google',
      links: 'www.google.com',
    },
    {
      name: 'John',
      surname: 'Doe',
      number: '31',
      mail: 'da@gmail.com',
      company: 'Google',
      links: 'www.google.com',
    },
    {
      name: 'John',
      surname: 'Doe',
      number: '31',
      mail: 'da@gmail.com',
      company: 'Google',
      links: 'www.google.com',
    },
  ];
  constructor(
    private usersService: UsersService,
    private postsService: PostsService
  ) {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
    });
    this.postsService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }
}
