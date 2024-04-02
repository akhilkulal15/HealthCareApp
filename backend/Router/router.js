import Person from '../Controller/controller.js';
import { Router } from "express";

const router = Router();
const person = new Person();

router.post("/", (req,res)=>{
    person.createPerson(req,res);
})

router.get("/", (req,res)=>{
    person.getAllPerson(req,res);
})

router.get('/id',(req,res)=>{
    person.getPersonId(req,res);
})

router.put("/:id", (req,res)=>{
    person.updatePerson(req,res);
})

router.delete("/:id", (req,res)=>{
    person.deletePerson(req,res);
})

export default router;