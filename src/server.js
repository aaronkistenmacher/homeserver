import SourceMapSupport from 'source-map-support';
import express from 'express';
import 'babel-polyfill';

SourceMapSupport.install();

const app = express();

app.use((req, res, next) => {
  if (!req.secure && process.env.NODE_ENV !== 'development') {
    return res.redirect(`https://${req.get('host')}${req.url}`);
  }
  return next();
});

app.get('/', (req, res) => {
  res.send('Hello Node');
});

app.listen(8080);
