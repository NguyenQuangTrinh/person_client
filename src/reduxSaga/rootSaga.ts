import { all, fork } from "redux-saga/effects";
import LoginSaga from "./login.saga";

export default function* RootState(){
    yield all([
        fork(LoginSaga)
    ]);
}