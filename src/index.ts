import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { UserDto } from './user.dto';
import usersService from './users.service';
import firestoreService from './firestore.service';

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const stage = express.Router();
// Middleware
const myLogging = (req, res, next) => {
  console.log('req: ', req.body);
  next();
};
app.use(myLogging);

app.use('/stage', stage);

stage.get('/data', async (req, res) => {
  const users = await usersService.listAll();
  res.send(users);
});

stage.get('/data/:userId', async (req, res) => {
  const users = await firestoreService.getById(req.params.userId);
  res.send(users);
});

stage.post('/data', async (req, res) => {
  const obj = req.body;
  const user: UserDto = { ...obj, id: new Date().getTime() };
  await firestoreService.save(user);
  // await usersService.create(user);
  const users = await usersService.listAll();
  res.status(200).send(users).end();
});

stage.get('/test', (req, res) => {
  res.send('OK');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('🚀 Server ready on port', port);
});
