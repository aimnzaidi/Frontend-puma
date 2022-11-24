import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {adidasserviceService} from '../adidasservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    'customerName':new FormControl('',Validators.required),
    'customerShoesName':new FormControl('',Validators.required),
    'orderDate':new FormControl('',Validators.required),
    'warrantyDate':new FormControl('',Validators.required),
    'price':new FormControl('',Validators.required)


  });

  constructor(private service:adidasserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {
    this.service.getOneCustomer(this.router.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res,'res==>');
      this.customerForm.patchValue({
          customerName:res.data[0].customerName,
          customerShoesName:res.data[0].customerShoesName,
          orderDate:res.data[0].orderDate,
          warrantyDate:res.data[0].warrantyDate,
          price:res.data[0].price
      });
    });
}
//to update a order
customerUpdate()
{
console.log(this.customerForm.value);
  this.service.updateCustomer(this.router.snapshot.params['id'], this.customerForm.value).subscribe((result:any)=>{

  this.customerForm.reset();
  this.message = true;

  });
}
removeMessage(){
this.message = false;
}
}
