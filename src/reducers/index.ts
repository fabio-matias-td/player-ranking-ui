import { combineReducers } from "redux";

export interface RootState {
  empty: {};
}

export const defaultRootState: RootState = {
  empty: {}
};

export default combineReducers<RootState>({
  empty: () => ({})
});
