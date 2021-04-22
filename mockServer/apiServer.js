//Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js

const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');

const router = jsonServer.router(path.join(__dirname, 'db.json'));

//
const middlewares = jsonServer.defaults();
//display json-server's built in homepage when json-server start

// set default middle wares (logger, static cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and Patch, using JSON server's body parser
server.use(jsonServer.bodyParser);

// simulate delay on all request
server.use((req, res, next) => setTimeout(next, 0));

// Declaring Custom Routes

//TODO: POST
// adding Created At to all POST request
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post('/courses/', function (req, res, next) {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title); // generate slot for new courses
  }
  next();
});

//use default router
server.use(router);

//start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});

// return a url friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function validateCourse(course) {
  if (!course.title) return 'Title is Required';
  if (!course.authorId) return 'Author is required';
  if (!course.category) return 'Category is required';
  return '';
}
