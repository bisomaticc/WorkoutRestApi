const express = require('express');
const { getAllWorkouts, getOneWorkout, createNewWorkout, deleteOneWorkout,updateOneWorkout } = require('../controllers/workoutController');
const routes= express.Router();

routes.get("/",getAllWorkouts);

routes.get("/:workoutId",getOneWorkout);

routes.post("/",createNewWorkout);

routes.patch("/:workoutID",updateOneWorkout);

routes.delete("/:workoutID",deleteOneWorkout);

module.exports=routes;