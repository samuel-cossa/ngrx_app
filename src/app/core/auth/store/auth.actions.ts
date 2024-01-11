import { createActionGroup, props } from "@ngrx/store";
import { AuthRegisterRequestInterface } from "../types/auth-register-request.interface";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register': props<{ request: AuthRegisterRequestInterface }>(),
  }
})