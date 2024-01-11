import { createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from "./auth.actions";
import { initialState } from "./auth.state";

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({ ...state, isSubmitting: true })),
  ),
});

export const { name: authFeatureKey, reducer: authReducer } = authFeature;