import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//  THIS THE TOGGLE BUTTON 
export class AppComponent { 
  show:boolean = false;  
  toggle() { 
    this.show = !this.show; 
 
    
  }
} 