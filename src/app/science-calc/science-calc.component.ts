import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science-calc',
  templateUrl: './science-calc.component.html',
  styleUrls: ['./science-calc.component.css']
})
export class ScienceCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }
  private doCalculation(op: any, secondOp: number){
    switch (op){
       case '+':
        this.firstOperand = Math.sign(secondOp)
       return this.firstOperand;
       case '-':
        this.firstOperand = Math.cos(secondOp)
       return this.firstOperand -= secondOp;
       case '*':
       return this.firstOperand **= secondOp;
       case '/':
         this.firstOperand = Math.sqrt(secondOp);
       return this.firstOperand ;
       case '=':
       return secondOp;
     }
   }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand===null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator ,
      Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
