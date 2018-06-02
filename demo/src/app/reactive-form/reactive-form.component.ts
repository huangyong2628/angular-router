import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {mobileAsyncValidator, mobileValidator, passwordValidator} from '../validators/Validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel: FormGroup;

  // FormBuilder工具类用来简化响应式表单的数据模型的构建
  fb: FormBuilder = new FormBuilder();

  constructor() {
    // 常规的响应式表单的数据模型的构建
    // this.formModel = new FormGroup({
    //   nickname: new FormControl(),
    //   emails: new FormArray([
    //     new FormControl()
    //   ]),
    //   mobile: new FormControl(),
    //   passwordInfo: new FormGroup({
    //     password: new FormControl(),
    //     passwordConfirm: new FormControl()
    //   }),
    // });
    // 利用FormBuilder工具类构建响应式表单的数据模型
    this.formModel = this.fb.group({
      nickname: ['', [Validators.required, Validators.minLength(6)]],
      emails: this.fb.array([
        ['']
      ]),
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordInfo: this.fb.group({
        password: ['', Validators.required],
        passwordConfirm: ['']
      }, {validator: passwordValidator}),
    });
  }

  ngOnInit() {
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }

  createUser() {
    const nicknameValue: boolean = this.formModel.get('nickname').valid;
    console.log('nickname是否校验通过：' + nicknameValue);
    const nicknameErrors: any = this.formModel.get('nickname').errors;
    console.log('nickname的校验信息：' + JSON.stringify(nicknameErrors));
    // if (this.formModel.valid) { // formModel里所有项目的校验结果为true，它自身的valid才为true
    //   console.log(this.formModel.value);
    // }
  }
}
