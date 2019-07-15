var express = require('express');
var router = express.Router();

/*
** Simulate a database
** We store our user into a variable usersList
** When the server stop, everything is emptied / lost
*/
let db = {
  usersList: []
};

/*
** GET /
** ex postman: GET localhost:3000/users
** Return all users stored inside the database
** The return is formated as a JSON
*/
router.get('/', function(req, res, next) {
  // return the full database
  res.json(db.usersList);
});

/*
** POST /
** ex postman: POST localhost:3000/users (body: all the values you want)
** Create an user object into our database
** Take the value from the POST (body)
*/
router.post('/', function(req, res, next) {
  // get the values from the body
  let user = req.body;
  // add an unique ID
  // all users should be unique with their ID
  user.id = Math.round(Math.random()*100000) + '';
  // add user into the db
  db.usersList.push(user);
  // return the user created
  res.json(user);
});

/*
** GET /{id}
** ex postman: GET localhost:3000/users/123
** Return one specific user searched with its id
*/
router.get('/:id', function(req, res, next) {
  // search the user with the ID in the url
  const user = db.usersList.find( user => user.id == req.params.id);
  // return the user found, or nothing if not
  res.json(user);
});

/*
** DELETE /{id}
** ex postman: DELETE localhost:3000/users/123
** Delete an user matched with its id
** Return the deleted user
*/
router.delete('/:id', function(req, res, next) {
  // find the index of the user with the ID in the url
  const index = db.usersList.findIndex( user => user.id == req.params.id);
  // save the user inside a variable to be able to return it
  const user = db.usersList[index];
  // remove the user from the databse
  db.usersList.splice(index, 1);
  // return the now deleted user
  res.json(user);
});

/*
** PUT /
** ex postman: PUT localhost:3000/users (body: all the values you want)
** Update an user matched with its id
** return the updated user
*/
router.put('/', function(req, res, next) {
  // search the user with the id in the body
  const index = db.usersList.findIndex(user => user.id == req.body.id);
  // update the user with the values inside body
  // it will erase the value from the database and take from the body
  db.usersList[index] = req.body;
  // get back the updated user
  const user = db.usersList[index];
  // return the user
  res.json(user);
});

module.exports = router;
