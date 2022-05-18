import React, { useState } from "react"

import { useNavigate } from "react-router"

const Navbar = (): React.ReactElement => {
    const navigate = useNavigate()
    const [currentTab, setCurrentTab] = useState("")
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full">
                <div className="flex items-center  text-white mr-6">
                    <span className="font-bold text-xl">Regs</span>
                </div>
                <div className="text-sm">
                    <span
                        className={
                            (currentTab == "Home" ? "text-white" : "text-[#1271ff]") +
                            " mt-4 mr-4 cursor-pointer"
                        }
                        onClick={() => {
                            setCurrentTab("Home")
                            navigate("/Home")
                        }}>
                        Home
                    </span>
                    <span
                        className={
                            (currentTab == "Services" ? "text-white" : "text-[#1271ff]") +
                            " mt-4   	  mr-4 cursor-pointer"
                        }
                        onClick={() => {
                            setCurrentTab("Services")
                            navigate("/Services")
                        }}>
                        Services
                    </span>
                    <span
                        className={
                            (currentTab == "Blog" ? "text-white" : "text-[#1271ff]") +
                            " mt-4   	  mr-4 cursor-pointer"
                        }
                        onClick={() => {
                            setCurrentTab("Blog")
                            navigate("/blog")
                        }}>
                        Blog
                    </span>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
