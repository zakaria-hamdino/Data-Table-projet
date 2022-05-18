import React, { useState } from "react"

import { faUserLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Login = ({ onLogin }: { onLogin: (user: UserObject) => void }): React.ReactElement => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginPress = (): void => {
        if (username == "" || password == "") {
            alert("fill it in")
            return
        }
        /*TODO: login using an api */
        onLogin({ id: 1, name: username, token: password })
        return
    }

    return (
        <div className="w-screen h-screen flex flex-row">
            <div className="p-10 bg-white dark:bg-gray-900 flex-1 flex flex-col justify-center items-center border-l border-gray-300 dark:border-gray-900">
                <div className="p-10  flex justify-center items-center flex-col text-blue-900 dark:text-gray-600">
                    <FontAwesomeIcon icon={faUserLock} size="3x" />

                    <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>

                    <input
                        type="email"
                        name="email"
                        className="mb-5 p-3 w-80 focus:border-gray-700 rounded border-2 outline-none dark:bg-gray-900  dark:focus:border-white dark:border-gray-600"
                        placeholder="Email"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        className="mb-5 p-3 w-80 focus:border-gray-700 rounded border-2 outline-none dark:bg-gray-900 dark:focus:border-white dark:border-gray-600"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        className="bg-blue-900 hover:bg-blue-600 text-white font-bold p-2 rounded w-80 dark:hover:bg-white dark:bg-gray-600 hover:text-white-900"
                        id="login"
                        type="submit"
                        onClick={() => handleLoginPress()}>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
