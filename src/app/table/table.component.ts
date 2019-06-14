import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableColumn = [];
  tableRow = []
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
  _object = Object;
  constructor() { }

  ngOnInit() {   
    for(var i in this.tableData[0]){   
        this.tableColumn.push(this.tableData[0][i].key)
    }
  }
  getTableRecords(tableRec: string){
    console.log(tableRec)

  }
}
