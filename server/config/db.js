const mongoose = require('mongoose')

const connectDB = async()=> {
    try{
        //code
        await mongoose.connect('mongodb+srv://thobi:login123456@cluster0.virgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log('Connect DB Success !!')
    }catch (err) {
        //err
        console.log(err)
        process.exit(1)
    }
}



module.exports = connectDB