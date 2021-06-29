import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const stage = express.Router();
const v1 = express.Router();
app.use('/stage', stage);
app.use('/v1', v1);

stage.get('/hello', (req, res) => {
  res.send('world!');
});

v1.get('/hello', (req, res) => {
  res.send('world');
});

stage.post('/echo', (req, res) => {
  res.status(200).json({ message: req.body.message }).end();
});

v1.post('/echo', (req, res) => {
  res.status(200).json({ message: req.body.message }).end();
});

stage.get('/test', (req, res) => {
  res.send('OK');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('🚀 Server ready on port', port);
});
