import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
{path:'home', component:HomeComponent, data:{title:'Home'}},
{path:'about', component:AboutComponent, data:{title:'About Me'}},
{path:'my-projects', component:ProjectsComponent, data:{title:'Projects'}},
{path:'services', component:ServicesComponent, data:{title:'Services'}},
{path:'contact-me', component:ContactComponent, data:{title:'Contact Me'}},

{path:'', redirectTo:'/home', pathMatch:'full'}, 
{path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
