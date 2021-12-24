import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { User } from "../helpers/types";
import { signIn, signOut, signUp } from "../services/auth.service";

type AuthType = {
  currentUser?: User;
  error?: string;
};

export const auth = createModel<RootModel>()({
  state: {
    currentUser: undefined,
    error: "",
  } as AuthType,
  reducers: {
    setUser: (state, payload: User) => ({
      ...state,
      error: "",
      currentUser: payload,
    }),
    setError: (state, payload: string) => ({ ...state, error: payload }),
  },
  effects: (dispatch) => ({
    async signUpAsync(payload: User, _) {
      const data = await signUp(payload);
      typeof data === "string" ? this.setError(data) : this.setUser(data.user);
    },
    async signInAsync(payload: User, _) {
      const data = await signIn(payload);
      typeof data === "string" ? this.setError(data) : this.setUser(data.user);
    },
    async signOutAsync() {
      this.setUser(null);
      signOut();
    },
  }),
});
