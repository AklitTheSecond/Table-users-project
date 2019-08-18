import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{

  @Input() page: number; // номер текущей страницы
  @Input() collectionSize: number; // размер выборки
  @Input() pageSize: number; // количество элементов на странице

  @Output() goPrev = new EventEmitter<any>();
  @Output() goNext = new EventEmitter<any>();

  constructor() { }

  onPrev (){  
    this.goPrev.emit();
  }

  onNext() {  
    this.goNext.emit();
  }

  lastPage(): boolean {
    return this.pageSize * this.page >= this.collectionSize;
  }

}
