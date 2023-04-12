import { Injectable } from '@angular/core';
import { Vacancy } from './models';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) {}
  ngOnInit(): void{
  }
  getVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`)
  }
  getVacanciesCompanies(id:number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`)
  }
}
