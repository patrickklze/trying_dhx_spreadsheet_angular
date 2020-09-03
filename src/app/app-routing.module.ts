import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';


const routes: Routes = [
  {path: 'ss1', component: SpreadsheetComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
