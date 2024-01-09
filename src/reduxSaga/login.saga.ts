import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, takeLatest } from "redux-saga/effects";
import { ActionSaga } from "./actionSaga";
import HookAPI from "../utils/HookApi";
import { POST } from "../utils/method.httprequest";
import Cookies from 'js-cookie';
import { createBrowserRouter } from "react-router-dom";

export interface Login{
    user: any,
    history: any
}


function* watchLoginSagaAsync(action: PayloadAction<Login>){
    const [result, error] = yield call(HookAPI, "user/login", action.payload.user, POST);
    if(result){
        
        Cookies.set("_person_token",result.jwts, {expires: result.profile.exp});
        action.payload.history("/")
    }else if(error){
        console.log(error);
    }
}

function* watchLoginSaga(){
    yield takeLatest(ActionSaga.LOGIN_SAGA, watchLoginSagaAsync);
}

export default function* LoginSaga(){
    yield fork(watchLoginSaga)
}