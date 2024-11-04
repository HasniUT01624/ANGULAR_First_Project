import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
// string intrpolation
Name:string = "Hasni";

// variable intapolation
num1:number = 10;
num2:number = 20;

// function intapolation
multipul(){
  return  this.num1 * this.num2
}

// Object Data Interpolation
myFriends:any ={
  Friend1: 'Nasra',
  Friend2:'Sahla'
}
}
