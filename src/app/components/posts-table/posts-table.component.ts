import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss'],
})
export class PostsTableComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  paginatedPosts: Post[] = [];
  pageSize = 10;
  pageIndex = 0;
  postTitle = '';
  postBody = '';
  private modalService = inject(NgbModal);

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.updatePaginatedPosts();
      console.log(posts);
    });
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  //get username according to user id
  getUsername(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.username : 'Unknown';
  }

  //angular material pagination
  trackByPost(index: number, post: Post): number {
    return post.id;
  }

  updatePaginatedPosts(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPosts = this.posts.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedPosts();
  }
  
  //ngxbootstrap modal
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  getProps(title: string, body: string) {
    this.postTitle = title;
    this.postBody = body;
  }
}
