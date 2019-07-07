var Movie = require('../../models/movie');
// var Performer = require('../../models/performer');

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
};

function getAllMovies (req, res) {
  Movie.find({}).populate('cast').then(function(movies) {
    res.status(200).json(movies);
  }).catch(function(err) { return err; });
}

function getOneMovie (req, res) {
  Movie.findById(req.params.id).populate('cast').then(function(movie) {
    res.status(200).json(movie);
  }).catch(function(err) { return err; });
}

function createMovie (req, res) {

  const movie = req.body;

  Movie.create({
    title: movie.title,
    releaseYear: movie.releaseYear,
    mpaaRating: movie.mpaaRating,
    nowShowing: movie.nowShowing
  }).then(function(movie) {
    res.status(201).json(movie);
  }).catch(function(err) { res.status(404); });
}

function updateMovie (req, res) {
  // Movie.findById(req.params.id).then(function(movie) {
  //   movie = req.body;
  //   movie.save(function(err) {
  //     if (err) res.status(404);
  //     res.status(200).json(movie);
  //   });
  // });
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(function(movie) {
    res.status(200).json(movie);
  }).catch(function(err) {
    if (err) res.status(404);
  });
}

function deleteMovie (req, res) {
  Movie.findByIdAndDelete(req.params.id)
  .then(function(movie) {
    res.status(200).json(movie);
  }).catch(function(err) {
    if (err) res.status(404);
  });
}