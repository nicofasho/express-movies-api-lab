var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');
// var performersCtrl = require('../controllers/api/performers');

router.get('/movies', moviesCtrl.getAllMovies);
router.get('/movies/:id', moviesCtrl.getOneMovie);
router.post('/movies', moviesCtrl.createMovie);
router.put('/movies/:id', moviesCtrl.updateMovie);
router.delete('/movies/:id', moviesCtrl.deleteMovie);

module.exports = router;