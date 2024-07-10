import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  users!: User[];

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
  ) {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });

    this.postsService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }
}
