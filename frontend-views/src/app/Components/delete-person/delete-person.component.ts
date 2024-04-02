import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-person',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './delete-person.component.html',
  styleUrl: './delete-person.component.css'
})
export class DeletePersonComponent {
  Persons = [{name:"Akhil Kulal",age:25,gender:"M",mobilenumber:"8879281292"}]

  public deletePerson(id:string){
    console.log(id);
  }
}
