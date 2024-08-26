const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://bijukunwar9:Gaurab9@nodeexpressprojects.ksf7c.mongodb.net/Task-Manager?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
};

module.exports = connectDB;
