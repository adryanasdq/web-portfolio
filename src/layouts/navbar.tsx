import { Outlet } from "react-router";

const Navbar = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white border-b border-gray-200">
                <div className="flex justify-between px-8 py-4 items-center">
                    <div className="flex items-center justify-center gap-4">
                        ICON
                    </div>
                    <div className="flex items-center space-x-4">
                        <div>LINKS</div>
                    </div>
                </div>
            </header>
            <div className="px-8 mt-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar;