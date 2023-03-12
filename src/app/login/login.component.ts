import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { NotificationService } from '../services/notification.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private be: BackendService,
    private ns: NotificationService,
	private router: Router,
	private session: SessionService
  ) { }

  username = '';
  password = '';

  loginForm = new FormGroup({
    'username' : new FormControl(this.username, [
                  Validators.required,
                  Validators.email
                ]),
    'password' : new FormControl(this.password, [
                  Validators.required
                ])
  });

  submit() {
    console.log(this.loginForm.value);

    let username = this.loginForm.value.username ? this.loginForm.value.username : '';
    let password = this.loginForm.value.password ? this.loginForm.value.password : '';

    this.be.signin(
       username
      , password
    ).subscribe( res => {
      if(res.success===true){

		if(res.data && res.data.userTokenId){

			this.ns.notify('Login successful');

			this.session.setToken(res.data.userTokenId);

			this.router.navigate(['/dashboard']);

		}else{

			this.ns.notify('Login failed');

		}

      }else{

        this.ns.notify(res.data);

      }
    });

  }

}
