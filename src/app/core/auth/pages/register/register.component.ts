import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthRegisterRequestInterface } from '../../types/auth-register-request.interface';
import { authActions } from '../../store/auth.actions';
import { AuthStateInterface } from '../../types/auth-state.interface';
import { selectIsSubmitting } from '../../store/auth.selectors';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  invalidPass: boolean = false;
  validatePassLength: boolean = false;
  duplicateUsername!: string;
  exist: boolean = false;
  title = inject(Title);
  store = inject(Store<{ auth: AuthStateInterface }>);

  isSubmitting$ = this.store.select(selectIsSubmitting);
  isSubmitting: boolean = false;

  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    role: ['admin'],
    status: [true]
  })

  ngOnInit(): void {
    this.title.setTitle('Angular App - Register');
  }

  onSubmit() {
    console.log('form: ', this.form.getRawValue());
    const request: AuthRegisterRequestInterface = { user: this.form.getRawValue() };
    this.store.dispatch(authActions.register({ request }));
    this.form.reset();
    this.store.select(selectIsSubmitting).subscribe((value) => {
      this.isSubmitting = value;
    })
  }

  functionDuplicateUser() {
    const username = this.form.value.username as string;
    if (username != '') {
      // this.store.dispatch(duplicateUser({ username: username }));
      // this.store.select(isDuplicateUser).subscribe(item => {
      //   const inExist = item;
      //   console.log(inExist)
      //   if (inExist) {
      //     this.exist = true;
      //     this.duplicateUsername = 'Username already exists!';
      //     this.form.controls['username'].reset();
      //     this.exist = false;
      //   }
      // });
    }
  }

}
