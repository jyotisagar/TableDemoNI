import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableColumn = [];
  tableData=[
   [    
    {key:'First Name',value:'Jyoti'},
    {key:'Last Name',value:'Sagar'},
    {key:'Address',value:'PS'},
    {key:'Mobile',value:'123'}
   ],
   [    
    {key:'First Name',value:'Gaurav'},
    {key:'Last Name',value:'Gupta'},
    {key:'Address',value:'Hj'},
    {key:'Mobile',value:'456'}
   ],
   [    
    {key:'First Name',value:'Manish'},
    {key:'Last Name',value:'Kumar'},
    {key:'Address',value:'Rt'},
    {key:'Mobile',value:'789'}
   ]
  ]
  constructor() { }

  ngOnInit() {
   
    for (var i = 0; i < 1; i++) {     
      for(var j in this.tableData[0]){
        if (this.tableColumn.indexOf(j) === -1) {
          this.tableColumn.push(this.tableData[i][j].key)
        }  
      }
    }
  }
}
