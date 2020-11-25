const router = require('express').Router();
let Data = require('../models/datas.model');

router.route('/').get((req,res)=>{
    Data.find()
    .then((datas) => res.json(datas))
    .catch(err => res.status(400).json('Error:' ,err))
})

router.route('/add').post((req,res) =>{
    const userId    = req.body.userId;
    const firstName = req.body.firstName;
    const lastName  = req.body.lastName;
    const email     = req.body.email;    
    const dob       = Date.parse(req.body.dob);
    const shortBio  = req.body.shortBio;

    const newData = new Data({
        userId,
        firstName,
        lastName,
        email,
        dob,
        shortBio
    })

    newData.save()
    .then(()=> res.json('data added'))
    .catch(err => res.status(400).json('Error:',err))

    router.route('/:id').get((req,res)=> {
        Data.findById(req.params.id)
        .then((datas) => res.json(datas))
        .catch(err => res.status(400).json("Error :", err))
    })

     
    router.route('/:id').delete((req,res)=>{
        Data.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Data deleted'))
        .catch(err => res.status(400).json('Error:', err))
    })

     router.route('/update/:id').post((req,res) =>{
         Data.findByIdAndUpdate(req.params.id)
         .then(Data =>{
             Data.userId    = req.body.userId,
             Data.firstName = req.body.firstName,
             Data.lastName  = req.body.lastName,
             Data.email     = req.body.email,
             Data.dob       = req.body.dob,
             Data.shortBio  = req.body.shortBio

             Data.save()
             .then(()=>res.json('data updated'))
             .catch(err => res.status(400).json('Error:', err))
         })
         .catch(err => res.status(400).json('Error:', err))
     })

})

module.exports = router;