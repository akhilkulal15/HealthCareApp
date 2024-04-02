import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewCardComponent } from './Components/view-card/view-card.component';
import { View } from './view';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import { HttpService } from './Services/http.service';
//import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewCardComponent,MatIconModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 constructor(private httpService:HttpService){}
  title = 'frontend-views';

  views= [
    {
      title:"List Persons",
      icon:"list",
      description:"Showing all the Persons on the database",
      url:"/list"
    },
    {
      title:"Add Person",
      icon:"add",
      description:"Add a new Person",
      url:"/add"
    },
    {
      title:"Update Person",
      icon:"update",
      description:"Update a Person's data",
      url:"/update"
    },
    {
      title:"Delete Person",
      icon:"remove",
      description:"Delete a Person",
      url:"/delete"
    }

]

rows = this.views.length;
count = (this.views.length/4)

  
  
}
