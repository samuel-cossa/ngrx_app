import { createActionGroup, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/register-request.interface";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register': props<{ request: RegisterRequestInterface }>(),
  }
})