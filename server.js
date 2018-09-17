const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const wpPageRoute = 'http://headless.consumentenwebsite.nl/wp-json/wp/v2/pages';
const defaultLang = 'nl';

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        wpPageRoute,
        lang: defaultLang,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/:langcode', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        wpPageRoute,
        lang: req.params.langcode,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/companies/:slug', (req, res) => {
      const actualPage = '/company';
      const queryParams = {
        slug: req.params.slug,
      };
      app.render(req, res, actualPage, queryParams);
    });

    const faviconOptions = {
      root: __dirname + '/static/',
    };
    server.get('/favicon.ico', (req, res) =>
      res.status(200).sendFile('favicon.ico', faviconOptions)
    );

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
