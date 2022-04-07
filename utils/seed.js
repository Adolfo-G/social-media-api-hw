const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getName, getEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  for (let i = 0; i < 2; i++) {
    const username = getName();
    const email = getEmail()
    users.push({
      username,
      email,
    });
  }
  
  await User.collection.insertMany(users);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
