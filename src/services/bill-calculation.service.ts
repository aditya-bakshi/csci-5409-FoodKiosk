import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ASTWithName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class BillCalculationService {

  constructor(private http: HttpClient) {
 
   }

  getData(selectedBun: string, selectedPatty: string, selectedDrink: string  ) : Observable<any>{
    return this.http.get("https://fdo75rwib5.execute-api.us-east-2.amazonaws.com/default/KioskBillCalculation",
    {params: { selectedBun: selectedBun, selectedPatty: selectedPatty, selectedDrink: selectedDrink  }});
}

confirmOrder(orderNumber: any, selectedBun: string, selectedPatty: string, selectedDrink: string  ) : Observable<any>{
  const headers = new HttpHeaders().set('Content-Type','application/json');
 headers.set('Access-Control-Allow-Origin', '*');
  const orderDetails = {

    "selectedBun": selectedBun,
    
    "selectedPatty": selectedPatty,
    
    "selectedDrink": selectedDrink
    
    }
  const body=JSON.stringify(orderDetails);
  return this.http.post("https://01546shj57.execute-api.us-east-2.amazonaws.com/test/putdynamodbdata", body,
  {headers: headers, params: { orderNumber: orderNumber}});

}

}
