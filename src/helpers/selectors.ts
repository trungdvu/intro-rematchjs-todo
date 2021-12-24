import { RootState } from "../store";

export const loadingSelector = (rootState: RootState) => rootState.loading;

export const authSelector = (rootState: RootState) => rootState.auth;
