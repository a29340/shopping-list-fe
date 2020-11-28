import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public isLogged = false;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
    auth.isAuthenticated$.subscribe(isLogged => this.isLogged = isLogged);
  }

  ngOnInit(): void {
  }

}
