import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    public auth: AuthService
  ) {
    this.initAuth();
  }

  /**
   * @description retrieves saved token from cookie and sets in http service
   */
  public async initAuth() {
    //check if client is browser
  }
}
