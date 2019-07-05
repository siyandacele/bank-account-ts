
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list.component';
import { AccountsService } from './../../services/accounts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AccountListComponent],
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
