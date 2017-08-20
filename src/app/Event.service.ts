import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map' ;

@Injectable()
export class EventService {
constructor( private http:Http) { }

getDetails(){
   return this.http.get("http://geek17.herokuapp.com/events")
        .map(res => res.json());
}
  addEvent(info){
    return this.http.post("http://geek17.herokuapp.com/events",info).map(res => res.json());
  }
   removePart(info){
    return this.http.delete("http://geek17.herokuapp.com/events/"+info).map(res => res.json());
  }

}