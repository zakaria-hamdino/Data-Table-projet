import React from "react"

import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Blog from "./screens/Blog"
import Home from "./screens/Home"
import Services from "./screens/Services"
import "core-js/stable"
import "regenerator-runtime/runtime"
import "./index.css"

/**
 * Global Layout for the application
 * @returns
 */
const Container = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    return <div className="w-full h-full flex flex-col justify-center items-center">{children}</div>
}

/**
 * Uses SPA with current screen controlled via variable
 *
 * Wraps the authenticated (user exists) in a Container component
 * for the global style/layout of the app
 *
 * @see Container
 * @returns
 */
const SPA = (): React.ReactElement => {
    /* handle the user's login and set the correct screen */

    /* user is not logged in - show a login scree */

    return (
        <Container>
            <Home />
        </Container>
    )
}

/**
 * Uses a React Router to switch patchs
 *
 * Wraps the authenticated (user exists) in a Container component
 * for the global style/layout of the app
 *
 * @see Container
 * @returns
 */
const Routed = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Blog" element={<Blog />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

/**
 *
 * @param router -> Use react router or use SPA switching screens
 * @returns React.ReactElement
 */
const App = ({ router }: { router?: boolean }): React.ReactElement =>
    router ? <Routed /> : <SPA />

ReactDOM.render(<App router />, document.getElementById("root"))
