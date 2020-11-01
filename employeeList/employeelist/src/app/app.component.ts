import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Employee Information Card.......';
  employees = [
    {name : 'Alex', position : 'Manager'},
    {name : 'Maria', position : 'CEO'},
    {name : 'Rostam', position : 'Programer'},
  ];
  model: any = {};
  model2: any = {};
  msg: any ="";
  addEmployee(): any{
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is Successfully Added.";
  }
  remove(i): any{
    this.employees.splice(i, 1);
    this.msg = "Record is Successfully Deleted.";
  }

  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }
  updateEmployee(){
    let k = this.myValue;
    for(let i=0; i<this.employees.length; i++){
      if(i==k){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = "Record is Successfully Updated.";
      }
    }
  }
  clickMe(){
    this.msg = "";
  }
}
