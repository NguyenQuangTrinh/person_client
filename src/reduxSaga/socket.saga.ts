import { eventChannel } from "redux-saga"
import { call, put, take } from "redux-saga/effects";
import { getAccessTokenFromCookie } from "../utils/cookie";
import {jwtDecode}  from 'jwt-decode';
import { addNewMessage } from "../redux/messager/messager.reducer";



export const ws = new WebSocket('ws://localhost:3000/ws')


function* initWebsocket() {

    return eventChannel(emitter => {

        ws.onopen = () => {
            console.log('opening...')
            var code = getAccessTokenFromCookie();
            if(code){
                ws.send(JSON.stringify({
                    type: "JOIN_ROOM",
                    data : jwtDecode(code)
                }))
            }
        }
        ws.onerror = (error) => {
            console.log('WebSocket error ' + error)
            console.dir(error)
        }
        ws.onmessage = (e) => {
            let msg = null
            try {
                msg = JSON.parse(e.data)
            } catch (e) {
                console.error(`Error parsing : ${e}`)
            }
            if (msg) {
                console.log(msg.message)
                switch (msg.message.type) {
                    case 'MESSAGE':
                        return emitter(addNewMessage(msg.message))
                    default:
                    // nothing to do
                }
            }
        }
        // unsubscribe function
        return () => {
            console.log('Socket off')
        }
    })
}
export default function* wsSagas() {
    const channel = yield call(initWebsocket)
    while (true) {
        const action = yield take(channel)
        yield put(action)
    }
}