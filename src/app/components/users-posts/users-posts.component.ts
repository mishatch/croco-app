import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrl: './users-posts.component.scss',
})
export class UsersPostsComponent {
  userId!: number;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
      this.loadUserPosts();
    });
  }

  loadUserPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts.filter((post) => post.userId === this.userId);
      console.log(this.posts);
    });
  }
}
