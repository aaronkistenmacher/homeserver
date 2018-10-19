import SourceMapSupport from 'source-map-support';
import express from 'express';
import 'babel-polyfill';

SourceMapSupport.install();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Node');
});

app.listen(8080);
