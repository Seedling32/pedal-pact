import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  user: [
    {
      firstName: 'David',
      lastName: 'Admin',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      location_id: 1,
      role: 'ADMIN',
    },
    {
      firstName: 'John',
      lastName: 'User',
      email: 'user@example.com',
      password: hashSync('123456', 10),
      location_id: 2,
      role: 'USER',
    },
  ],
};

export default sampleData;
