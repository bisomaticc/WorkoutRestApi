const DB = require("./db.json");

const {saveToDatabase} = require("./utils");

const getAllWorkouts =()=>{
    return DB.workouts;
};

const createNewWorkout = (newWorkout)=>{
    const isAlreadyAdded= DB.workouts.findIndex((workout)=>workout.name === newWorkout.name)
    if (isAlreadyAdded){
        return;
    }

DB.workouts.push(newWorkout);
saveToDatabase(DB);
return newWorkout;
};
function getAllWorkouts(){
    return DB.workouts();
}

module.exports={getAllWorkouts,createNewWorkout}