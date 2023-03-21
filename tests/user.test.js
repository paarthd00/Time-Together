const data = require('./data.json');
const User = require('./user');

test('login check', () => {
    for (let user in data.users) {
        let newuser = new User(data.users[user].userName, data.users[user].password);
        expect(newuser.login(data.users[user].userName, data.users[user].password)).toBe(true);
    }
});

test('Fail login check', () => {
    expect(data.users[1].userName).toBe("ed");
    expect(data.users[1].password).toBe("1234d");
});

test('register check', () => {
    data.users["3"] = {
        "userName": "JUn",
        "password": "sleep"
    }
    expect(data.users["3"].userName).toBe("JUn");
    expect(data.users["3"].password).toBe("sleep");
});

test('fail register check', () => {
    data.users["3"] = {
        "userName": "JUn",
        "password": "sleep"
    }
    expect(data.users["3"].userName).toBe("JUnnn");
    expect(data.users["3"].password).toBe("notsleep");
});