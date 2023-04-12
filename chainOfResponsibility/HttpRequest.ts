class HttpRequest {
     constructor (private _username: string, private _password: string){}
     public get password(): string {
        return this._password;
    }
    public get username(): string {
        return this._username;
    }
}
export default HttpRequest;