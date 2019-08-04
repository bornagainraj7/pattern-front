import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public number: number;
  public pattern = [];

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if(form.invalid) {
      return;
    } 

    if(!this.ifOdd(this.number)) {
      this.httpService.showError();
      return; 
    }

    this.httpService.showSuccess();
    this.getPattern(this.number);
    
  }

  ifOdd(number: number) {
    if(number % 2 != 0){
      return true;
    } else {
      return false;
    }
  }

  getPattern(number) {
    // console.log(number)
    this.httpService.generatePattern(number)
    .subscribe(pattern => {
      if(pattern.data) {
        // console.log(pattern.data);
        this.pattern = pattern.data;
      }
    }, error => {
      console.log(error);
    }); 
  }


}
