import {Component, Inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-logout-bottom-sheet',
  templateUrl: './logout-bottom-sheet.component.html',
  styleUrls: ['./logout-bottom-sheet.component.css']
})
export class LogoutBottomSheetComponent {

  constructor(@Inject(DOCUMENT) public document: Document,
              private auth: AuthService) { }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.logout({ returnTo: document.location.origin });
  }
}
