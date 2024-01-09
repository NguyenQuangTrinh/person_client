import InputMessage from "./inputMessage";
import { Outlet, useParams } from "react-router-dom";
import Message from "./message";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionSaga } from "../../reduxSaga/actionSaga";


export function ListMessageComponent() {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ActionSaga.GET_CURRENT_USER, payload: {id: id}})
    },[id])

    return (
        <div className="flex flex-col h-full w-full bg-white px-4 py-6">
            {/* <Outlet /> */}
            <Message/>
            <InputMessage />
        </div>
    )
}