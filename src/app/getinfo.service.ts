import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  constructor(public HttpClient:HttpClient) { }

  getinfo()
  {
    return this.HttpClient.get('http://localhost:3000/college');
  }


  postinfo(bodyresource)
  {
    return this.HttpClient.post('http://localhost:3000/college',bodyresource);
  }

  updateinfo(studentid,updatebody)
  {
    const url='http://localhost:3000/college/'+studentid;
    return this.HttpClient.put(url,updatebody);
  }

  deleteinfo(studentid)
  {
    const url='http://localhost:3000/college/'+studentid;
    return this.HttpClient.delete(url);
  }


}
