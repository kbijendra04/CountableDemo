import { Component, OnInit,Inject } from '@angular/core';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import Swal from 'sweetalert2'
 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rForm: FormGroup;
  public data:any=[];
  public expenceData:any=[];
  public sum:number;    
  public groupByWeek:any = {};
  public expensesByWeek:any = [];
  public defaultDate:any=new Date().toLocaleDateString();
  private myFormat="MM/dd/yyyy";
    
   
  constructor( @Inject(LOCAL_STORAGE) private _storage: WebStorageService,
  private _fb:FormBuilder) {     
    this.rForm=_fb.group({
      'amount':[null],
      'description':[null],
      'date':[this.defaultDate]
    });
  }

  //ngOnInit function call on page load an load all data
  ngOnInit() {    
    if(this._storage.get("ExpenseData"))
      this.expenceData=JSON.parse(this._storage.get("ExpenseData"));

    this.getExpence();    
    this.defaultDate = new Date().toLocaleDateString();
          
  }

  //Create guid for unique id
  Guid()  
  {      
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
  }    

  //Add new expence
  addExpense(value){   
    this.expenceData.push({
      id:this.Guid(),
      amount:value.amount,
      description:value.description,
      date:value.date,
      editing:false     
    }); 
      this._storage.set("ExpenseData",JSON.stringify(this.expenceData)); 
      Swal({
        position: 'center',
        type: 'success',
        title: 'Expence has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.rForm.reset();        
      this.getExpence();      
  }

   //Get all expence data with total expence
   getExpence(){          
      this.data=JSON.parse(this._storage.get("ExpenseData")); 
      this.totelExpenceAmount(); 
      this.getExpensesByWeek();        
  }

  //Get totel expence till date
  totelExpenceAmount(){     
    this.sum=0;
    for(var i=0,a;a=this.data[i];i++)
    {
      if(a.amount!=='')
      {
        this.sum += parseFloat(a.amount);
      }
    }     
  } 
  
  //Remove expence from the storage
 async removeExpence(expense){  
  Swal({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      var index = this.data.indexOf(expense);
         this.data.splice(index, 1);
         this._storage.set("ExpenseData",JSON.stringify(this.data)); 
         this.expenceData.splice(index,1);
      Swal(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )   
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
    this.getExpence(); 
  })   
  }

  //This event show row data in eitable mode
  editExpense(expense) { 
    expense.editing = true;    
  };

  // This event update the row data after click on update button
  updateExpence(expense){  
       this.expenceData= this.expenceData.filter((val)=>{
        return val.id!==expense.id;
      })

    expense.editing=false;
      this.expenceData.push({
        id:expense.id,
        amount:expense.amount,
        description:expense.description,
        date:expense.date,
        editing:false     
      }); 
     
      this._storage.set("ExpenseData", JSON.stringify(this.expenceData));
      Swal({
        position: 'center',
        type: 'success',
        title: 'Expence has been update',
        showConfirmButton: false,
        timer: 1500
      })
      this.getExpence();         
 } 
 
 // Return week number to calculate the weekly expence
  getWeekNumber(d){ 
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  var yearStart:any = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return  weekNo;
}

//Get list of all expenses group by week till date
getExpensesByWeek() { 
  this.groupByWeek = {};
  this.expensesByWeek = [];

  for(let i=0; i < this.data.length; i++)
  {
    let dt=new Date(this.data[i]['date']);
    let weekYear =dt.getUTCFullYear()+'-'+this.getWeekNumber(dt) ;

    if (this.groupByWeek.hasOwnProperty(weekYear)) {
      this.groupByWeek[weekYear].push(this.data[i]);
    } else {
      this.groupByWeek[weekYear] = [this.data[i]];
    }
  }
   
  for(var item in this.groupByWeek)
  {     
    let sum:number=0;
    var test=item; 
    var weekData=this.groupByWeek[test];
    for(var i=0;i<weekData.length;i++)
    {      
      sum+=+weekData[i].amount;
    }
    this.expensesByWeek.push({ week: test, amount: sum });    
  } 
 } 
 
}

