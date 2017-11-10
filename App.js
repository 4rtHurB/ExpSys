import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/Question';

const app = express();
const PORT = 3001;
const DB = 'localhost/question';

mongoose.Promise = Promise;

mongoose.connect('mongodb://' + DB, {
  useMongoClient: true
}).on('connected', () => {
  console.log('connected to mongodb:/' + DB);
});

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use('/api', routes);

app.listen(PORT , () => {
  console.log('server api listening on port ' + PORT);
});

export default app;