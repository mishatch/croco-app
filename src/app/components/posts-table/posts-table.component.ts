import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.scss',
})
export class PostsTableComponent {
  posts: Post[] = [];
  users: User[] = [];
  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }
  getUsername(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.username : 'Unknown';
  }
}
