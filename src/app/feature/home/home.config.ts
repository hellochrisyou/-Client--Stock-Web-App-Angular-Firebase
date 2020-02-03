import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const CREATE_LOGIN_FG = (fb: FormBuilder): FormGroup => {

    const loginFb: FormGroup = fb.group({
        loginEmailCtrl: ['', [
            Validators.required,
            Validators.email,
        ]],
        loginPassCtrl: ['', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25)
        ]]
    });
    return loginFb;
};

export const CREATE_SIGNUP_FG = (fb: FormBuilder): FormGroup => {

    const signupFb: FormGroup = fb.group({
        signupEmailCtrl: ['', [
            Validators.required,
            Validators.email,
            Validators.maxLength(25),
        ]],
        signupPassCtrl: ['', [
            Validators.required,
            Validators.maxLength(25),
        ]]
    });
    return signupFb;
};