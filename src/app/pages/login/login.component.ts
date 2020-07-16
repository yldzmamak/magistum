import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalVariables } from 'src/app/shared/variables';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordHide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required]],
    });
  }

  getErrorUsername() {
    return this.loginForm.get('userName').hasError('required')
      ? GlobalVariables.requiredUsername
      : this.loginForm.get('userName').hasError('maxlength')
      ? GlobalVariables.maxLengthUsername
      : '';
  }

  getErrorPassword() {
    return this.loginForm.get('password').hasError('required')
      ? GlobalVariables.requiredPassword
      : '';
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const val = this.loginForm.value;

    if (val.userName && val.password) {
      this.authService.login(val.userName, val.password);
    }
  }
}
