import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StaticInformationService {

  modules: any[] = [];

  constructor(public http: Http) {
    this.http.get('assets/data/modules.json').
      subscribe(data => {
        this.modules = data.json();
    });
  }

}
