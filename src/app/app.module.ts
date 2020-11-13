import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListElementComponent } from './list-detail/list-element/list-element.component';
import { ListAddModalComponent } from './list-detail/list-add-modal/list-add-modal.component';
import { NewListModalComponent } from './home/new-list-modal/new-list-modal.component';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import { UserInfoComponent } from './user-info/user-info.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDetailComponent,
    ListElementComponent,
    ListAddModalComponent,
    NewListModalComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    DragDropModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName: 'XSRF-TOKEN'}),
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-6iexu8k3.us.auth0.com',
      clientId: 'A705ukIzaAfihrQoKcpVQlYckTyDw5so',
      audience: environment.audience,

      scope: 'access',

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-6iexu8k3.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'api/shopping/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: environment.audience,
              // The attached token should have these scopes
              scope: 'access'
            }
          }
        ]
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
