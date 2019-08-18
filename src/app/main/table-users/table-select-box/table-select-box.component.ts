import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-select-box',
  templateUrl: './table-select-box.component.html',
  styleUrls: ['./table-select-box.component.css']
})
export class TableSelectBoxComponent implements OnInit {
  
  public entriesArr: Array<number> = [5, 10, 15, 20, 25, 30];
  public selectedPageSize: number=this.entriesArr[1]; //стартовое значение селектбокса

  @Output() setPageSize = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  //получение выбранного размера страницы
  getSelectedPageSize(){
      this.setPageSize.emit(this.selectedPageSize);
  }
}
