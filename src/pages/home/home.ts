import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../Pages/Home/Home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

value = '';

siete(e){
  if(e=='AC'){
    this.value ='';
  }
  else if (e == '='){
    this.value = eval(this.value);
  }

  else if (e == '%'){
    this.value = eval(this.value / 100);
  }
  else if (e == '+/-'){
    this.value = eval(-this.value);
  }

  else{
this.value += e;

  }
  
}

   
    


  

  

  

  constructor(public navCtrl: NavController) {

  

  }

 

  

  
  


 

 





    

  

   

}
