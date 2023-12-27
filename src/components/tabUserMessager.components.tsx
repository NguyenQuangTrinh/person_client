
interface TabUserMessagerInterface {
    time: string,
    name: string,
    lastMessage: string,
    messageUnread: number
}

export default function TabUserMessagerComponent(tab: TabUserMessagerInterface) {
    return (
        <div className="relative flex flex-row items-center p-4">
            <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">{tab.time} min</div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                T
            </div>
            <div className="flex flex-col flex-grow ml-3">
                <div className="text-sm font-medium">{tab.name}</div>
                <div className="text-xs truncate w-40">{tab.lastMessage}</div>
            </div>
            <div className="flex-shrink-0 ml-2 self-end mb-1">
                <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">{tab.messageUnread}</span>
            </div>
        </div>
    )
}