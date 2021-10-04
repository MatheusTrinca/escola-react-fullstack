const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Matheus 1',
          email: 'matheus1@gmail.com',
          password_hash: await bcryptjs.hash('teste123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Matheus 2',
          email: 'matheus2@gmail.com',
          password_hash: await bcryptjs.hash('teste123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Matheus 3',
          email: 'matheus3@gmail.com',
          password_hash: await bcryptjs.hash('teste123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
