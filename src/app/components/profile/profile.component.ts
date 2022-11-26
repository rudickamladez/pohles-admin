import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

  constructor(
    private readonly authService: AuthService
  ) { }

  get user(): User { return this.authService.getUser(); }
}
