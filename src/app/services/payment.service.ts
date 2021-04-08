import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
export const API_BASE = "https://anyurl.api";
@Injectable()
export class PaymentService {

  constructor(private httpClient: HttpClient, private router: Router) { }



  public post(data) {
    return this.httpClient.post(`${API_BASE}`, data);
  }
}
