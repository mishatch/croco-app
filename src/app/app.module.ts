import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NamePipe } from './pipes/name.pipe';
import { SurnamePipe } from './pipes/surname.pipe';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsTableComponent } from './components/posts-table/posts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    NavigationComponent,
    TableComponent,
    FooterComponent,
    NamePipe,
    SurnamePipe,
    UsersPostsComponent,
    PostsTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
