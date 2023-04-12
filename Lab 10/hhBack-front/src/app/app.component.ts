import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from 'src/app/models'
import { VacancyService } from './vacancy.service';
import { CompanyService } from './company.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hhBack-front';
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: VacancyService, private companyService: CompanyService){

  }
  ngOnInit(): void {
      this.vacancyService.getVacancies().subscribe((data) => {
        console.log(data);
      })
      this.companyService.getCompanies().subscribe((data) => {
        console.log(data);
      })
  }
}
