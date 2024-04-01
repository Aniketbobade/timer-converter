import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  formData = {
    date: '',
    time: '',
    name: ''
  };

  resultList:any=[]
  constructor(private httpClient: HttpClient,private datePipe: DatePipe){}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/get').subscribe((res:any)=>{
      this.resultList = res.map((item:any) => ({
        ...item,
        EnterTime: this.datePipe.transform(item.EnterTime, 'medium') // Convert timestamp to local timezone format
      }));
    })
  }

  submitForm() {
    console.log('Form submitted with data:', this.formData);
    // Here you can send this.formData to your backend
     const enter= new Date(this.formData.date +' '+this.formData.time)
     console.log(enter)
     const UTCdate= enter.toUTCString();
    const object= {Name:this.formData.name,EnterTime:UTCdate}
   this.httpClient.post('http://localhost:3000/save',object).subscribe((res)=>{
    console.log(res);
   })
   this.ngOnInit()
  }
}