import { useEffect, useState } from "react";
import { ListMessageComponent } from "../components/messager/listMessage.components";
import TabUserMessagerComponent from "../components/tabUserMessager.components";
import useWebSocket from "react-use-websocket";
import { useDispatch } from "react-redux";
import { addNewMessage } from "../redux/messager/messager.reducer";

const WS_URL = 'ws://127.0.0.1:3000/ws';
export default function MessagerPage() {

    const dispath = useDispatch();

    const { sendJsonMessage, lastJsonMessage }: any = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('WebSocket connection established.');
        }
    });

    useEffect(() => {
        sendJsonMessage({
            type: "join",
            idUser: "123",
            message: "",
            data: {
                idRoom: "123",
            }
        })
        console.log(lastJsonMessage);
    }, [])

    useEffect(() => {   
        console.log(lastJsonMessage);
        if(lastJsonMessage?.message.type == "message"){
            dispath(addNewMessage(lastJsonMessage.message))
        }

    }, [lastJsonMessage])

    function sendMessage(txt: string) {
        sendJsonMessage({
            type: "message",
            idUser: "123",
            message: txt,
            data: {
                idRoom: "123",
            }
        })
    }

    return (
        <div className="flex flex-row h-screen antialiased text-gray-800">
            <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
               {/* menu messager */}
                <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            <div className="text-xl font-semibold">Messages</div>
                            <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5</div>
                        </div>
                        <div className="ml-auto">
                            <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                                <svg className="w-4 h-4 stroke-current"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="flex flex-row items-center justify-between">
                            <li>
                                <a href="#"
                                    className="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                                    <span>All Conversations</span>
                                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                                    <span>Archived</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                                    <span>Starred</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <div className="text-xs text-gray-400 font-semibold uppercase">Team</div>
                    </div>
                    <div className="mt-2">
                        <div className="flex flex-col -mx-4">
                            <TabUserMessagerComponent time="5" messageUnread={0} name="Trinh" lastMessage="Demo" />
                            <TabUserMessagerComponent time="5" messageUnread={0} name="Trinh" lastMessage="Demo" />

                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="text-xs text-gray-400 font-semibold uppercase">Personal</div>
                    </div>
                    <div className="h-full overflow-hidden relative pt-2">
                        <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">

                        </div>
                        <div className="absolute bottom-0 right-0 mr-2">
                            <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                                <svg className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ListMessageComponent sendMessage={sendMessage}/>
        </div>
    )
}