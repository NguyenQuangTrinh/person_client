import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { ActionSaga } from "./actionSaga";
import HookAPI from "../utils/HookApi";
import { GET } from "../utils/method.httprequest";
import { getAllMessage } from "../redux/messager/messager.reducer";

interface Messager{
    idRoom: string
}


function* getAllMessagerByIdRoomAsync(action: PayloadAction<Messager>){
    const [result, error] = yield call(HookAPI, `messager/getAllMessagerByIdRoom/${action.payload.idRoom}`,null, GET);
    if(result){
       yield put(getAllMessage(result))
    }else if(error){
        console.log(error);
    }
}

function* watchMessagerSaga(){
    yield takeLatest(ActionSaga.GET_MESSAGER_ROOM_ID, getAllMessagerByIdRoomAsync);
}

export default function* MessagerSaga(){
    yield fork(watchMessagerSaga);
}