import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { BackstageService } from '../../../services/backstage.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  isLoading = false;

  onSubmit(): void {
    this.isLoading = true;
    const that = this;
    this.service.login(this.validateForm.value).subscribe({
      next(res: any) {
        that.modelService.confirm({
          nzTitle  : '提示',
          nzContent: res.msg,
          nzOnOk   : () => console.log('OK')
        });
      },
      complete() {
        that.isLoading = false;
      },
    });
  }

  constructor(private fb: FormBuilder,
              private service: BackstageService,
              private modelService: NzModalService,
              ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
    });
  }

}
