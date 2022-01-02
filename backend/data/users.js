import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@wk-shop.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'j.doe@test.com',
        password: bcrypt.hashSync('1234', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@test.com',
        password: bcrypt.hashSync('1234', 10),
    },
];

export default users;
