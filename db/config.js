const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log('Database successfully connected')
    }catch(e){
        throw new Error('Error connecting to the database', e);
    }
}
module.exports ={
    dbConnection
}