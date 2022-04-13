import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  first: string | undefined;
  last : string | undefined;
  email: string | undefined;
  text:  string | undefined;
  getValue(f : string,l : string,e : string,t : string){
    console.log(f);
    console.log(l);
    console.log(e);
    console.log(t);
    this.first = f;
    this.last  = l;
    this.email = e;
    this.text  = t;
  }
}


