import app from './app';

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
