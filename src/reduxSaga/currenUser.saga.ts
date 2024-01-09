import { call, fork, put, takeLatest } from "redux-saga/effects";
import HookAPI from "../utils/HookApi";
import { GET, POST } from "../utils/method.httprequest";
import { PayloadAction } from "@reduxjs/toolkit";
import { getCurrentUser } from "../redux/user/currenUser.reducer";
import { ActionSaga } from "./actionSaga";



function* watchCurrentUserAsync(action: PayloadAction<any>) {
    const [result, error] = yield call(HookAPI, `user/userByid/${action.payload.id}`, action.payload.user, GET);
    if (result) {
        console.log(result)
        yield put(getCurrentUser(result))
    } else if (error) {
        console.log(error);
    }
}

function* watchCurrentUser(){
    yield takeLatest(ActionSaga.GET_CURRENT_USER, watchCurrentUserAsync);
}


export default function* currentUserSaga(){
    yield fork(watchCurrentUser)
}
