module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'alunos',
      [
        {
          nome: 'Joao 1',
          sobrenome: 'Maria',
          email: 'joaomaria1@gmail.com',
          idade: 23,
          peso: 67,
          altura: 1.87,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Joao 2',
          sobrenome: 'Maria',
          email: 'joaomaria2@gmail.com',
          idade: 29,
          peso: 90,
          altura: 1.77,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Joao 3',
          sobrenome: 'Maria',
          email: 'joaomaria3@gmail.com',
          idade: 24,
          peso: 87,
          altura: 1.76,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => {},
};
