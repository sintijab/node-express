
import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client'));

app.use((_, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type, x-requested-with');
  next();
});

app.get('/api', (_: Request, res: Response) => {
  res.send('Bond')
})
app.get('/api-json', (_, res) => {
  res.header('Content-Type','application/json');
  res.send({ data: 'Bond'});
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
export default app;