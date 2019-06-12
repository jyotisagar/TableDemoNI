import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableData=[
   [    
    {key:'column1',value:'val11'},
    {key:'column2',value:'val12'}
   ],
   [    
    {key:'column1',value:'val21'},
    {key:'column2',value:'val22'}
   ],
   [    
    {key:'column1',value:'val31'},
    {key:'column2',value:'val32'}
   ]
  ]
  tableColumn = ['column1','column2']
  constructor() { }

  ngOnInit() {
  }
  

}
