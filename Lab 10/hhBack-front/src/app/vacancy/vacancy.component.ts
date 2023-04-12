import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] = [];
  id: number | undefined;
  constructor(private route: ActivatedRoute, private vacancyService: VacancyService){

  }
  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vacancyService.getVacanciesCompanies(this.id).subscribe((vacancies) => this.vacancies = vacancies);
  }
}
