import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackstageService } from '../../../../services/backstage.service';

import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  tags: string[] = ['默认分类', '生活'];

  type = 'new'; // new : 新建，old : 编辑

  articleForm: FormGroup;

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private service: BackstageService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      tag: [ '默认分类', [ Validators.required ] ],
      title: [ null, [ Validators.required ] ],
      content: [ null, [ Validators.required ] ],
      isPrivate: [ false, [ Validators.required ] ],
    });
  }

  onSubmit() {
    const that = this;
    this.isLoading = true;
    this.service.saveArticle(this.articleForm.value, this.type).subscribe({
      next(res: any) {
        that.message.success(res.msg, {
          nzDuration: 3000,
        });
      },
      error(err: any) {
        that.message.error(err.msg, {
          nzDuration: 3000,
        });
      },
      complete() {
        that.isLoading = false;
      },
    });
  }

}
