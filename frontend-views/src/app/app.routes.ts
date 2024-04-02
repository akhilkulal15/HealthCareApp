import { Routes } from '@angular/router';
import { ListPersonComponent } from './Components/list-person/list-person.component';
import { AddPersonComponent } from './Components/add-person/add-person.component';
import { UpdatePersonComponent } from './Components/update-person/update-person.component';
import { DeletePersonComponent } from './Components/delete-person/delete-person.component';

export const routes: Routes = [
    {path:"list",component:ListPersonComponent},
    {path:"add",component:AddPersonComponent},
    {path:"update",component:UpdatePersonComponent},
    {path:"delete",component:DeletePersonComponent},
    
];
