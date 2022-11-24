import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { adidasserviceService} from '../adidasservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private service:adidasserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;


  ngOnInit(): void {

     //id for update 
     this.getparamid = this.router.snapshot.paramMap.get('id');
     if (this.getparamid){
     this.service.getOneCustomer(this.getparamid).subscribe((res)=>{
 
       console.log(res,'res==>');
       this.customerForm.patchValue({
        customerName:res.data[0].customerName,
        customerShoesName:res.data[0].customerShoesName,
        orderDate:res.data[0].orderDate,
           warrantyDate:res.data[0].warrantyDate,
           price:res.data[0].price,
       });
     });
  }
}

customerForm = new FormGroup({
  'customerName':new FormControl('',Validators.required),
  'customerShoesName':new FormControl('',Validators.required),
  'orderDate':new FormControl('',Validators.required),
  'warrantyDate':new FormControl('',Validators.required),
  'price':new FormControl('',Validators.required),
});

//to create customer
customerSubmit(){
  if(this.customerForm.valid){
    console.log(this.customerForm.value);
    this.service.createCustomer( this.customerForm.value ).subscribe((res)=>{
      console.log(res,'res==>');
      this.customerForm.reset();
      this.successmsg = res.message;
    });

  }
  else{
    this.errormsg = 'all field is required';
  }

}
//to update a customer
customerUpdate()
{
console.log(this.customerForm.value,'updatedform');

if(this.customerForm.valid)
{
  this.service.updateCustomer(this.customerForm.value,this.getparamid).subscribe((res)=>{
    console.log(res,'resupdated');
    this.successmsg = res.message;

  })
}
else
{
  this.errormsg = 'all field is required';
}
}
}
