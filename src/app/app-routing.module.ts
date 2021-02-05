import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './home/signin/signin.component';
import { SignUpComponent } from './home/signup/sign.up.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoDetailsModule } from './photos/photo-details/photo.details.module';
import { PhotoDetailsComponent } from './photos/photo-details/photo.details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
        {
            path: '',
            component: SignInComponent,
            data: {
              title: 'Sign in'
            }
        },
        {
            path: 'signup',
            component: SignUpComponent,
            data: {
              title: 'Sign up'
            }
        },
    ]
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  { path: 'user/:userName', 
    component: PhotoListComponent , 
    resolve: {
      photos: PhotoListResolver
    },
    data: {
      title:  'Timeline'
    }
  },
  { 
    path: 'photos/add', 
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Photo upload'
    }
  },
  { 
    path: 'photos/:photoId', 
    component: PhotoDetailsComponent
  },
  { 
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
