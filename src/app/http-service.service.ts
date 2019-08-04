import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private toastr: ToastrService, private http: HttpClient) { }

  showSuccess() {
    this.toastr.success('Generating...', 'Success');
  }

  showError() {
    this.toastr.error('Not an Odd number', 'Error')
  }


  generatePattern(number) {
    return this.http.get<{data: number[]}>(`${this.baseUrl}/diamond?number=${number}`);
  }
 
}
