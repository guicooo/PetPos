import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class AppService {

  public baseURL = 'https://petpos.herokuapp.com/api';
  public token = '5b6724e0-5913-4d79-8cc1-1f521a824b3b';

  constructor() {

  }


  public requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': this.token,
      }),
  };


}
