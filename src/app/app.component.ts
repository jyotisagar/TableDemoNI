import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  action_ren = false;
  action_del = false;
  show:any;
  action:any;
  name: any;;
  

  getName(tileAction){
    this.action = tileAction;
    if(tileAction === 'RENAME'){
      this.action_ren = true;
      this.action_del = false;      
    }
    if(tileAction === 'DELETE'){
      this.action_del = true;
      this.action_ren = false;      
    }
  }
  edit(action_new_value){
    console.log('edit value:' + action_new_value)
    // create a method in service class and pass this action_new_value as a parameter
    // this method will call the API 
    // API will update in DB
    // ID is also required to rename anything.
  }
  resetdiv(){
    console.log('i m in resetdiv()')
    // here add your original {{tilename}}
    this.name = this.action;
  }
}
