import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TablePage } from './table-page';

@Injectable({
  providedIn: 'root'
})
//сервис для общения с условным "бэком"
export class TableUsersService {
  private usersUrl: string = "https://api.github.com/search/users?q="; //базовая строка для поиска

  constructor (private _http: HttpClient) { }
  
  //получение списка пользователей
  public getUsers(page: number, itemsPerPage: number, desiredLogin: string): Observable<TablePage>{
   var usersSearchUrl=this.usersUrl+desiredLogin; //итоговая строка для поиска
   var users = this._http.get<any>(usersSearchUrl);  //запрос на получение пользователей
   return this.getPageItems(users, page, itemsPerPage);
  }

  //получение списка пользователей для текущей страницы page с количеством записей на странице itemsPerPage
  getPageItems(users: Observable<Array<any>>, page: number, itemsPerPage: number): Observable<TablePage>{
    return users.pipe(
      map(u => {
        var startIndex = itemsPerPage*(page-1);
        return new TablePage ((<any>u).items.length,
         (<any>u).items.slice(startIndex, startIndex+itemsPerPage));
      }
      )
    );
  }

  //получение списка репозиториев (по ссылке)
  public getRepos(reposUrl: string) {
    return this._http.get(reposUrl);
  }

  //получение списка подписчиков (по ссылке)
  public getFollowers(followersUrl: string) {
    return this._http.get(followersUrl);
  }
}
