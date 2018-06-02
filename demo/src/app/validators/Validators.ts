import {FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

// 自定义FormControl校验器
export function mobileValidator(mobile: FormControl): any {
  const value = (mobile.value || '') + '';
  const myReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18)[0-9]{1}))+\d{8}$/;
  const valid = myReg.test(value);
  console.log('mobile是否校验通过：' + valid);
  return valid ? null : {mobile: true};
}

// 自定义FormGroup校验器
export function passwordValidator(info: FormGroup): any {
  const password: FormControl = info.get('password') as FormControl;
  const passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
  if (password != null && passwordConfirm != null) {
    const valid: boolean = password.value === passwordConfirm.value;
    console.log('password是否校验通过：' + valid);
    return valid ? null : {password: {description: '密码和确认密码不匹配'}};
  }
  return null;
}

// 异步校验器
export function mobileAsyncValidator(mobile: FormControl): any {
  const value = (mobile.value || '') + '';
  const myReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18)[0-9]{1}))+\d{8}$/;
  const valid = myReg.test(value);
  console.log('mobile是否校验通过：' + valid);
  return of(valid ? null : {mobile: true}).pipe(delay(5000));
}
