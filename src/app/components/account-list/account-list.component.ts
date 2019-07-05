import { Accounts } from './../../models/accounts.models';

import { Component, OnInit } from '@angular/core';
import { AccountsService } from './../../services/accounts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  public totalAmount: number;
  public accounts: Accounts[];
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(accounts => {

      this.accounts = accounts;
      this.totalAmount = accounts.reduce((acc, account) =>
        +account.balance + acc, 0);

    });
  }


}
