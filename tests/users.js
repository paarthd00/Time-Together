

class Users {
    users: user[];
    
    login(userName, password) {
        users.array.forEach(element => {
            (userName === this.userName && password === this.password) ? true : false;
        });
    }
}

module.exports = Users;