import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class XmlProcessorServiceService {

  extractedData(res: Observable<Response>) {
    return res || {};
  }
  constructor(private http:Http) { }
private apiURL = 'http://localhost:1234/api.v1/getJson'
  getJsonFromInputXML(formData:FormData){
   // var response = this.http.post(this.apiURL,formData);
   // return this.extractedData(response);

   return {
     name:"some name",
     amount: 12456.33,
     address: "Some Address",
     someFiled : "Its value",
     someOtherField : "Other Value"
   };
  }
}
