import { all, fork } from "redux-saga/effects";
import LoginSaga from "./login.saga";
import wsSagas from "./socket.saga";
import currentUserSaga from "./currenUser.saga";
import MessagerSaga from "./messager.saga";

export default function* RootState(){
    yield all([
        fork(LoginSaga),
        fork(wsSagas),
        fork(currentUserSaga),
        fork(MessagerSaga)
    ]);
}