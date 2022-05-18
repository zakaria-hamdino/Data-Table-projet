/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * BASE API class that provides API connectivity
 * API implementations should extend this class
 */
class Base {
    static APIURL = process.env.API

    static BuildHeaders(user: UserObject): HeadersInit {
        const requestHeaders: HeadersInit = new Headers()
        requestHeaders.set("Content-Type", "application/json")
        requestHeaders.set("Key", "" + user.id)
        requestHeaders.set("Authorization", "123")
        return requestHeaders
    }

    static Get(user: UserObject, path: string, cb: any, err?: (e: string) => void): void {
        fetch(this.APIURL + "/" + path, {
            headers: this.BuildHeaders(user),
        })
            .then((r) => r.json())
            .then((d: any) => cb(d))
            .catch((error) => {
                if (err) err(error)
            })
    }

    static Post(
        user: UserObject,
        path: string,
        body: any,
        cb: any,
        err?: (e: string) => void
    ): void {
        fetch(this.APIURL + "/" + path, {
            method: "POST",
            headers: this.BuildHeaders(user),
            body: JSON.stringify(body),
        })
            .then((r) => r.json())
            .then((d: any) => cb(d))
            .catch((error) => {
                if (err) err(error)
            })
    }

    static GetJSON(user: UserObject, path: string, cb: any, err?: (e: string) => void): void {
        fetch("/" + path + ".json")
            .then((r) => r.json())
            .then((d: any) => cb(d))
            .catch((error) => {
                if (err) err(error)
            })
    }
}

export { Base }
