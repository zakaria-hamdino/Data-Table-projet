import { createContext } from "react"

const UserContext = createContext<UserObject | undefined>(undefined)

export default UserContext
