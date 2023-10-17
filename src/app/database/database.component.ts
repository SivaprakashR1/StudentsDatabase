import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {
  public getJsonValue: any;
  public postJsonValue: any;
  
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getMethord()
  }
  public getMethord(){
    this.http.get('https://652e0dd0f9afa8ef4b27fd5f.mockapi.io/necstudents/college').subscribe();
  }
}
@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  private apiUrl = 'https://api.example.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getApiData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}