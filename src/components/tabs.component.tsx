import { Link } from "react-router-dom";

export default function TabsComponent() {
    return (

        <div>
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full rounded-md border-gray-200">
                    <option>Settings</option>
                    <option>Messages</option>
                    <option>Archive</option>
                    <option selected={true}>Notifications</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <nav className="flex gap-6" aria-label="Tabs">
                    <Link
                        to="/"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Settings
                    </Link>

                    <Link
                        to="messager"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Messages
                    </Link>

                    <Link
                        to="/"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Archive
                    </Link>

                    <Link
                        to="/"
                        className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
                        aria-current="page"
                    >
                        Notifications
                    </Link>
                </nav>
            </div>
        </div>
    )
}