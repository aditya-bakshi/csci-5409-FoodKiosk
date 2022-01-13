import { Component, OnInit } from '@angular/core';
import { BillCalculationService } from 'src/services/bill-calculation.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  selectedBun = "wheat";
  selectedPatty = "veganPatty";
  selectedDrink = "coke";
  isPriceCalculated = false;
  isOrderConfirmed = false;
  calculatedPrice: any;
  orderNumber = 1;
  constructor(private billingService: BillCalculationService) { }

  ngOnInit(): void {
  }

  resetPrice() {
    this.isPriceCalculated = false;
    this.isOrderConfirmed = false;
  }

  calculateBill(event?: any) {
    console.log(event);
    console.log("Selections are " + this.selectedBun + this.selectedPatty);
    this.isOrderConfirmed = false;
    this.billingService.getData(this.selectedBun, this.selectedPatty, this.selectedDrink).subscribe((data: any) => {
      if (data) {
        this.isPriceCalculated = true;

        this.calculatedPrice = data;

      }
      console.log("Data is" + data);
    })

  }

  placeOrder(event: any) {
    this.orderNumber = this.orderNumber + 1;
    this.billingService.confirmOrder(this.orderNumber, this.selectedBun, this.selectedPatty, this.selectedDrink).subscribe((data: any) => {
      if (data) {

        this.calculateBill();
        this.isOrderConfirmed = true;

      }
      console.log("Data is" + data);
    })
  }

}
