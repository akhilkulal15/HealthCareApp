import model from "../model/model.js";

class Person{
    constructor(){}

    async createPerson(req,res){
        try{
            const Persondoc = model(req.body);
            await Persondoc.save();
            console.log("document added");
        }
        catch(err){
            console.log(err);
        }
    }

    async getAllPerson(req,res){
        try{
            const persons = await model.find();
            res.send(persons);
        }
        catch(err){
            console.log(err);
        }
    }

    async putPerson(req,res){
        try{
            const persons = await model.findByIdAndUpdate({_id:req.params.id},{$set:req.body});
            console.log(updated);
        }
        catch(err){
            console.log(err);
        }
    }
    
    async deletePerson(req,res){
        try{
            const persons = await model.findByIdAndDelete({_id:req.params.id});
            console.log("Deleted person");
        }
        catch(err){
            console.log(err);
        }
    }

    async getPersonId(req,res){
        try{
            const person = await model.findOne({$and:[{name:req.query.name},{age:req.query.age},{gender:req.query.gender},{mobilenumber:req.query.mobilenumber}]});
            res.send(person._id);
        }
        catch(err){
            console.log(err);
        }
    }
}

export default Person;