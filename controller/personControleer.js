
const Person = require("../models/person");



//create new 'person' and save to the data base
const createPerson = (req, res) => {
    const { name, age, favoriteFoods } = req.body;
    const person = new Person({
        name, age, favoriteFoods
    });
    person.save((err, savedperson) => {
        if (err) {
            return res.status(500).send("error saving person")
        }
        res.status(201).json(savedperson)
    });
};
//create many people
const createManypeople = (req, res) => {
    const people = req.body;
    Person.create(people, (err, createdpeople) => {
        if (err) {
            return res.status(500).send("error creating people")
        }
        res.status(201).json(createdpeople)

    })
};
//finde people by name
const findpeopleByname = (req, res) => {
    const name = res.params;
    Person.find({ name }, (err, people) => {
        if (err) {
            return res.status(500).send("error find people")
        }
        res.status(200).json(people)
    })
}
//find one person by favorite food
const findPersonByFavoriteFood = (req, res) => {
    const { food } = req.params;

    Person.findOne({ favoriteFoods: food }, (err, person) => {
        if (err) {
            return res.status(500).send('Error finding person');
        }
        res.status(200).json(person);
    });
};
//find person by id
const findpersonbyid = (res,req)=>{
const {personId} = req.params
Person.findById(personId,(err,person)=>{
if(err){
    res.status(500).send("error find a person by id")
}
res.status(200).json(person)
})

}
//add food to person by id
const addFoodToPerson = (req, res) => {
    const { personId } = req.params;

    Person.findById(personId, (err, person) => {
        if (err) {
            return res.status(500).send('Error finding person');
        }

        person.favoriteFoods.push('Hamburger');
        person.save((err, updatedPerson) => {
            if (err) {
                return res.status(500).send('Error saving updated person');
            }
            res.status(200).json(updatedPerson);
        });
    });
};
//update person age by name
const updatepesronagebyname = (req, res) => {
    const { name } = req.body;
    Person.findOneAndUpdate(
        { name },
        { age: 20 },
        { new: true },
        (err, updatedPerson) => {
            if (err) {
                res.status(500).send("error updating person")
            }
            res.status(200).json(updatedPerson)

        }
    )
};
//deleted preson by id
const deletepersonByid = (req, res) => {
    const { personId } = req.params;
    Person.findByIdAndDelete(personId, (err, deletedperson) => {
        if (err) {
            res.status(500).send("erroe delete person")
        }
        res.status(200).json(deletedperson)
    });
};
//deleted people by name
const deletpeopleByname =(req,res)=>{
    const {name} = req.params;
    Person.deleteOne({name},(err,result)=>{
        if(err){
            res.status(500).send("error deleting people by name")
        }
        res.status(200).json(result)
    })
}
module.exports = {
    deletepersonByid,
    deletpeopleByname,
    updatepesronagebyname,
    addFoodToPerson,
    findPersonByFavoriteFood,
    findpeopleByname,
    createManypeople,
    createPerson,
    findpersonbyid
}