import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  tableRowCol=[]
  tableColumn = [];  
  tableData=[]
  tableData4=[
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
  tableData5=[
    [    
     {key:'First Name',value:'Jyoti'},
     {key:'Last Name',value:'Sagar'},
     {key:'Address',value:'PS'},
     {key:'Mobile',value:'123'},
     {key:'Age',value:'12'}
    ],
    [    
     {key:'First Name',value:'Gaurav'},
     {key:'Last Name',value:'Gupta'},
     {key:'Address',value:'Hj'},
     {key:'Mobile',value:'456'},
     {key:'Age',value:'45'}
    ],
    [    
     {key:'First Name',value:'Manish'},
     {key:'Last Name',value:'Kumar'},
     {key:'Address',value:'Rt'},
     {key:'Mobile',value:'789'},
     {key:'Age',value:'78'}
    ],
    [    
      {key:'First Name',value:'Amit'},
      {key:'Last Name',value:'Kumar'},
      {key:'Address',value:'Ng'},
      {key:'Mobile',value:'789'},
      {key:'Age',value:'78'}
     ]
   ]  
   tableData6=[
    [    
     {key:'First Name',value:'Jyoti'},
     {key:'Last Name',value:'Sagar'},
     {key:'Address',value:'PS'},
     {key:'Mobile',value:'123'},
     {key:'Age',value:'12'},,
     {key:'Sex',value:'Male'}
    ],
    [    
     {key:'First Name',value:'Gaurav'},
     {key:'Last Name',value:'Gupta'},
     {key:'Address',value:'Hj'},
     {key:'Mobile',value:'456'},
     {key:'Age',value:'45'},
     {key:'Sex',value:'Male'}
    ],
    [    
     {key:'First Name',value:'Manish'},
     {key:'Last Name',value:'Kumar'},
     {key:'Address',value:'Rt'},
     {key:'Mobile',value:'789'},
     {key:'Age',value:'78'},
     {key:'Sex',value:'Male'}
    ],
    [    
      {key:'First Name',value:'Smriti'},
      {key:'Last Name',value:'Irani'},
      {key:'Address',value:'Ak'},
      {key:'Mobile',value:'789'},
      {key:'Age',value:'48'},
      {key:'Sex',value:'Female'}
     ],
     [    
      {key:'First Name',value:'Sonia'},
      {key:'Last Name',value:'Gandhi'},
      {key:'Address',value:'Dl'},
      {key:'Mobile',value:'789'},
      {key:'Age',value:'58'},
      {key:'Sex',value:'Female'}
     ],
     [    
      {key:'First Name',value:'Menka'},
      {key:'Last Name',value:'Gandhi'},
      {key:'Address',value:'Roh'},
      {key:'Mobile',value:'789'},
      {key:'Age',value:'61'},
      {key:'Sex',value:'Female'}
     ]
   ]  

   tableData7=[
    [    
      {key:'First Name',value:'Jyoti'},
      {key:'Last Name',value:'Sagar'},
      {key:'Address',value:'PS'},
      {key:'Mobile',value:'123'},
      {key:'Age',value:'12'},
      {key:'Sex',value:'Male'},
      {key:'Company',value:'Infosys'}

     ],
     [    
      {key:'First Name',value:'Gaurav'},
      {key:'Last Name',value:'Gupta'},
      {key:'Address',value:'Hj'},
      {key:'Mobile',value:'456'},
      {key:'Age',value:'45'},
      {key:'Sex',value:'Male'},
      {key:'Company',value:'Google'}
     ],
     [    
      {key:'First Name',value:'Manish'},
      {key:'Last Name',value:'Kumar'},
      {key:'Address',value:'Rt'},
      {key:'Mobile',value:'789'},
      {key:'Age',value:'78'},
      {key:'Sex',value:'Male'},
      {key:'Company',value:'Facebook'}
     ],
     [    
       {key:'First Name',value:'Smriti'},
       {key:'Last Name',value:'Irani'},
       {key:'Address',value:'Ak'},
       {key:'Mobile',value:'789'},
       {key:'Age',value:'48'},
       {key:'Sex',value:'Female'},
       {key:'Company',value:'Accenture'}
      ],
      [    
       {key:'First Name',value:'Sonia'},
       {key:'Last Name',value:'Gandhi'},
       {key:'Address',value:'Dl'},
       {key:'Mobile',value:'789'},
       {key:'Age',value:'58'},
       {key:'Sex',value:'Female'},
       {key:'Company',value:'IBM'}
      ],
      [    
       {key:'First Name',value:'Menka'},
       {key:'Last Name',value:'Gandhi'},
       {key:'Address',value:'Roh'},
       {key:'Mobile',value:'789'},
       {key:'Age',value:'61'},
       {key:'Sex',value:'Female'},
       {key:'Company',value:'CTS'}
      ],
      [    
        {key:'First Name',value:'Vedant'},
        {key:'Last Name',value:'Sagar'},
        {key:'Address',value:'PS'},
        {key:'Mobile',value:'789'},
        {key:'Age',value:'8'},
        {key:'Sex',value:'Male'},
        {key:'Company',value:'Google'}
       ]
   ]  
  constructor() {  
   }

  getTableData(tableLength: number){
    this.tableRowCol=[]
    switch(tableLength) {      
      case 4: { 
          this.tableData = this.tableData4;   
          break;      
      } 
      case 5: { 
        this.tableData = this.tableData5;       
        break;
      } 
      case 6:{
        this.tableData = this.tableData6;        
        break;
      }
      case 7: { 
        this.tableData = this.tableData7;        
        break;
      }      
   } 
    for(var i in this.tableData[0]){   
      this.tableColumn.push(this.tableData[0][i].key)           
    }         
    this.tableRowCol[0] = this.tableColumn;
    this.tableRowCol[1] = this.tableData;
    return this.tableRowCol;    
  }
}

/* for(var i in this.tableData[0]){   
  this.tableColumn.push(this.tableData[0][i].key)           
}         
this.tableRowCol[0] = this.tableColumn;
this.tableRowCol[1] = this.tableData;
return this.tableRowCol;  */