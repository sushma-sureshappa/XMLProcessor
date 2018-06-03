import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { XmlProcessorServiceService } from '../../services/xml-processor-service.service';
import { FinalResult } from './final-result';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'formdata-upload',
  templateUrl: './formdata-upload.component.html'
})
export class FormdataUploadComponent {
  getArray(jsonObj:any): any {
    var len = 0;
    for (var key in jsonObj) {
      len++;
    }
    var result :FinalResult[] = new Array(len);
    var index = 0;
    for (var key in jsonObj) {
      var arrayItem = new FinalResult();
      arrayItem.key = key;
      arrayItem.value = jsonObj[key];
      result[index] = arrayItem;
      index++;
      //console.log(key);
     // console.log(jsonObj[key]);
  }
 // return new FinalResultDataSource(result);
  return result;
  }
  form: FormGroup;
  loading: boolean = false;
  displayTable : boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  //finalResult = new FinalResultDataSource([]);
  finalResult:any[];
  constructor(private fb: FormBuilder,private xmlProcessorService : XmlProcessorServiceService,private cd:ChangeDetectorRef) {
    this.createForm();
    
  }

  createForm() {
    this.form = this.fb.group({
      xmlFile: null
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('xmlFile').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('xmlFile', this.form.get('xmlFile').value);
    return input;
  }
  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    var jsonResponse = this.xmlProcessorService.getJsonFromInputXML(formModel);
    this.finalResult =  this.getArray(jsonResponse);
    this.displayTable = true;
    this.loading = false;
  }

  clearFile() {
    this.form.get('xmlFile').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.displayTable = false;
  }

}


// export class FinalResultDataSource extends DataSource<FinalResult> {
//   constructor(private result: FinalResult[]) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<FinalResult[]> {
//     return Observable.of(this.result);
//   }

//   disconnect() {}
// }
