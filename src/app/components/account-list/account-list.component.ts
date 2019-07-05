import { Accounts } from './../../models/accounts.models';

import { Component, OnInit } from '@angular/core';
import { AccountsService } from './../../services/accounts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  public totalAmount: number;
  public accounts: Accounts[];
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(accounts => {

      this.accounts = accounts.map(account => {
        return {
          ...account,
          canWithDraw: this.shouldWithDraw(account)
        };
      });
      this.totalAmount = accounts.reduce((acc, account) =>
        +account.balance + acc, 0);

    });
  }

  private shouldWithDraw(account: Accounts): boolean {
    return !(account.account_type === 'savings' && account.balance <= -20
          || account.account_type === 'cheque' && account.balance <= -500);
  }
  onWithdraw(): void {
    alert('Success');
  }


}
