import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableRowCol = []
  tableColumn = [];  
  tableData=[]
  _object = Object;
  constructor(private tabledataservice: TableDataService) { }

  ngOnInit() {    
    this.tableColumn = [];  
    this.tableData=[];
  }

  getTableRecords(tableRec: number){   
    
    this.tableRowCol = this.tabledataservice.getTableData(tableRec);
    this.tableColumn = this.tableRowCol[0];  
    this.tableData = this.tableRowCol[1];  

  }
}
