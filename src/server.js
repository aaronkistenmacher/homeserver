import SourceMapSupport from 'source-map-support';
import express from 'express';
import 'babel-polyfill';

SourceMapSupport.install();

const app = express();

app.use((req, res, next) => {
  if ((req.get('X-Forwarded-Proto') !== 'https') && process.env.NODE_ENV !== 'development') {
    res.redirect(`https://${req.get('host')}${req.url}`);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.send('Hello Node');
});

app.listen(8080);
