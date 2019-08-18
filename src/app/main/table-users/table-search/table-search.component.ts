import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  @Output() setDesiredLogin = new EventEmitter<string>();
  public loginControl: FormControl;
  constructor() { }

  //подписка на получение данных из поисковой формы ввода
  ngOnInit() {
    this.loginControl = new FormControl();
    this.loginControl.valueChanges.pipe(delay(200))
    .subscribe(value => this.setDesiredLogin.emit(value));
   }
  }
