import { Component, OnInit } from '@angular/core';

interface CalendarColumn {
  field: string;
  header: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public columns: CalendarColumn[] = [
    { field: 'monday', header: 'Понедельник' },
    { field: 'monday', header: 'Вторник' },
    { field: 'monday', header: 'Среда' },
    { field: 'monday', header: 'Четверг' },
    { field: 'monday', header: 'Пятница' },
    { field: 'monday', header: 'Суббота' },
    { field: 'monday', header: 'Воскресенье' },
  ];

  public count = [1, 2, 3, 4, 5, 6, 7];
  public count2 = [8, 9, 10, 11, 12, 13, 14];
  public count3 = [15, 16, 17, 18, 19, 20, 21];
  public count4 = [22, 23, 24, 25, 26, 27, 28];
  public count5 = [29, 30, 31, 1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
