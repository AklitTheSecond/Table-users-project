import { Component, OnInit, Input } from '@angular/core';
import { TableUsersService } from '../table-users/table-users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userLogin;
  userAvatar;
  userRepos;
  userFollowers;
  reposList;
  followersList;

  constructor(private route: ActivatedRoute, private _tableUsersService: TableUsersService) {}

   ngOnInit() {
    this.userLogin = this.route.snapshot.queryParamMap.get('login');
    this.userAvatar = this.route.snapshot.queryParamMap.get('avatar_url');
    this.userRepos = this.route.snapshot.queryParamMap.get('repos_url');
    this.userFollowers = this.route.snapshot.queryParamMap.get('followers_url');
    this._tableUsersService.getRepos(this.userRepos).subscribe(repos => this.reposList = repos);
    this._tableUsersService.getFollowers(this.userFollowers).subscribe(followers => this.followersList = followers);
    };

    
  
  }
