import mongoose from 'mongoose';

var dbConnect = (async ()=> {
        try{
            await mongoose.connect('mongodb://localhost:27017/personsdb', () => {
                console.log('Database connected successfully');
            })
        }
        catch(err){
            console.log(err);
        }
    }
)

export default dbConnect;