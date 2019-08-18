import { Component, OnInit } from '@angular/core';
import { TableUsersService } from './table-users.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class  TableUsersComponent implements OnInit {
 
  public users: Array<User>; //массив для работы с "пользователями"
  public collectionSize: number; //размер выборки
  public page: number; //текущая страница
  public itemsPerPage: number; //число записей на странице
  public desiredLogin: string; //желаемый логин (для поиска)
  public showingCollection: number; //число для отображения количества представленных строк таблицы

  constructor(private _tableUsersService: TableUsersService,
     private _router: Router) {     
  }

  //заданные параметры страницы при запуске приложения
  ngOnInit() {
    this.page=1;    
    this.itemsPerPage=10;  
    this.loadPage();   
  }

  //отображение страницы пользователей
  private loadPage(){
    this._tableUsersService.getUsers(this.page, this.itemsPerPage, this.desiredLogin)
    .subscribe(p => {
      this.users = p.rows; //список пользователей
      this.collectionSize = p.totalCount; // счетчик полученных результатов запроса
    });
  }

  //получение числа для указания размеров полученной выборки
  getShowingCollection (): number {
    if ((this.itemsPerPage*(this.page-1)+this.itemsPerPage)>this.collectionSize){
    return this.showingCollection=this.collectionSize;
    } else {
      return this.showingCollection=this.itemsPerPage*(this.page-1)+this.itemsPerPage;
    }
  }

  //следующая страница
  onNext() {   
    this.page++;   
    this.loadPage();
  }

  //предыдущая страница
  onPrev (){  
    this.page--;
    this.loadPage();
  }

  //выбранный размер страницы
  getSelectedPageSize(selectedPageSize: number){
    this.page=1; 
    this.itemsPerPage=selectedPageSize;
    this.loadPage(); 
  }


  //искомый логин
  getDesiredLogin(desiredlogin: string){
    this.page=1; 
    this.desiredLogin=desiredlogin;
    this.loadPage(); 
  }

  //параметры пользователя + роут на страницу с информацией о нем
  goToUserInfo(user){
    this._router.navigate(
      ['userInfo', user.id], 
      {
          queryParams:{
              'login': user.login,
              'avatar_url': user.avatar_url,
              'repos_url': user.repos_url,
              'followers_url': user.followers_url              
          },
          skipLocationChange: true
      }
  );
}
}

