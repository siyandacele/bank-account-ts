
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list.component';
import { AccountsService } from './../../services/accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBoxComponent } from './loading-box/loading-box.component';

@NgModule({
  declarations: [AccountListComponent, LoadingBoxComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AccountListComponent],
  providers: [
    AccountsService
  ]
})
export class AccountListModule { }
