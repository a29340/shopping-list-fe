import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {LogoutBottomSheetComponent} from './logout-bottom-sheet/logout-bottom-sheet.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public isLogged = false;

  constructor(public auth: AuthService,
              private logoutBottomSheet: MatBottomSheet) {
    auth.isAuthenticated$.subscribe(isLogged => this.isLogged = isLogged);
  }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this.logoutBottomSheet.open(LogoutBottomSheetComponent)
  }
}
