import React from "react"

import Navbar from "@src/Components/Navbar"

import Users from "./Components/Users"

const Home = (): React.ReactElement => {
    return (
        <div className="w-full h-full">
            <Navbar />
            <Users />
        </div>
    )
}

export default Home
