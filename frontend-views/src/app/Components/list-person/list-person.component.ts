import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpServiceService } from '../../Services/http-service.service';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.css'
})
export class ListPersonComponent {

  Persons = [{name:"Akhil Kulal",age:25,gender:"M",mobilenumber:"8879281292"}]

 // constructor(private HttpService:HttpServiceService){
    
  //}


}
