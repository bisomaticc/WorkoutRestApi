const express = require('express');
const aroutes=require('./routes/workoutRoutes');
const app =express();
const PORT =3000;
const bodyParser= require("body-parser");

app.use(bodyParser.json());

app.use('/api/v1/workouts',aroutes);

// app.post('/users',[UserControllers.insert]);

// app.get('/users/:userId',[UserControllers.getByiD]);

app.listen(3000,()=>{
    console.log(`server is running on ${PORT}`);
});

module.exports=app;