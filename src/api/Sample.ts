import { Base } from "./Base"

/** SAMPLE Api to get u started */
class API extends Base {
    /**
     * Get an array of things
     * @param user - Authenticated user object
     * @param cb - callback function taht will receive the list of things
     * @param err - callback fucntion taht will get the error if any
     */
    static GetListSomething(
        user: UserObject,
        cb: (t: Something[]) => void,
        err?: (e: string) => void
    ): void {
        this.GetJSON(user, "things", cb, err)
    }

    static GetSpecificSomething(
        user: UserObject,
        id: number,
        cb: (t: Something) => void,
        err?: (e: string) => void
    ): void {
        this.Get(user, "things/" + id, cb, err)
    }
}

export { API }
