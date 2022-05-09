import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  validationErrors: string[] = [];
  loading = false;

  constructor(private accountService: AccountService, private router: Router, 
    private toastr: ToastrService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/dashboard';
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login() {
    this.loading = true;
    this.accountService.login(this.loginForm.value).subscribe(response => {
      this.router.navigateByUrl(this.returnUrl);
      this.loading = false;
    }, error => {
      this.validationErrors = error;
      // this.toastr.error(this.validationErrors);
      this.loading = false;
    })
  }

}
