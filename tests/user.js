class User {
    userName;
    password;
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    login(userName, password) {
        return (userName === this.userName && password === this.password)
            ? true
            : false;
    }
}

module.exports = User;