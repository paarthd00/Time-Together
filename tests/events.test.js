const data = require('./data.json');

test('check user name for event', () => {
    expect(data.users[JSON.parse(data.events[0].users[0])].userName).toBe("Jack");
})
    