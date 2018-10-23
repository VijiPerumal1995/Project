import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
//import { RouterModule } from '@angular/route';
//import { HttpClientModule} from '@angular/common/http';
//const Routes =[
  //{
    //path:'',
    //redirectTo:'bookings',
    //pathMatch:'full'
  //},
  //{
    //path:'bookings',component: BookingsComponent
  //}
//];

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule
  //  RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
