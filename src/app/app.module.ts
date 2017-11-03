import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TechComponent } from './components/tech/tech.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    TechComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'contacto', component: ContactComponent},
      {path:'tech',component: TechComponent}      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
